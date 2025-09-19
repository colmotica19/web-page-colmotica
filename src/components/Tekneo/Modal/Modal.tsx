import {
  forwardRef,
  useRef,
  useImperativeHandle,
  type ReactNode,
} from "react";
import "./Modal.css";

export interface ModalHandle {
  showModal: () => void;
  close: () => void;
}

const Modal = forwardRef<ModalHandle, { children: ReactNode, className?: string, blur?: boolean, onClose?: () => void }>(
  ({ children, className, blur, onClose }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const showModal = () => dialogRef.current?.showModal();
    const close = () => {
      // animate disappearance and call provided onClose prop after animation
      dialogRef.current?.classList.add("disappear");
      if (typeof onClose === "function") {
        try {
          onClose();
        } catch (err) {
          // swallow any errors from onClose to avoid breaking the UI
          // but log for debugging
          console.error("Modal onClose handler error:", err);
        }
      }
      setTimeout(() => {
        dialogRef.current?.close();
        dialogRef.current?.classList.remove("disappear");
      }, 500);
    };
    // Exponemos los métodos al padre
    useImperativeHandle(ref, () => ({
      showModal,
      close,
    }));

    const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
      if (e.target === e.currentTarget) close();
    };

    return (
      <dialog ref={dialogRef} className={`Modal ${className} ${blur ? " blurBackground" : ""}`} onClick={handleBackdropClick}>
        <button type="button" title="Cerrar ventana" onClick={close} className="absolute top-[10px] right-[10px] closeModal">
          <svg className="fill-gray-400 size-[16px]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 25 25" version="1.1">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="inherit" fillRule="evenodd">
              <g id="Icon-Set-Filled" transform="translate(-469.000000, -1041.000000)" fill="inherit">
                <path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross">
                </path>
              </g>
            </g>
          </svg>
        </button>
        {children}
      </dialog>
    );
  }
);

export default Modal;
