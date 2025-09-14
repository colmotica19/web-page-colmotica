import {
  forwardRef,
  useRef,
  useImperativeHandle,
  useEffect,
  type ReactNode,
} from "react";
import './Popover.css'

export interface PopoverHandle {
  showPopover: (anchor: HTMLElement) => void;
  close: () => void;
  forceClose: () => void;
  this: HTMLDialogElement | null;
}

const Popover = forwardRef<
  PopoverHandle,
  { children: ReactNode; className?: string, btnClose?: boolean, gapTop: number, gapLeft: number }
>(({ children, className, btnClose, gapTop, gapLeft }, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const anchorRef = useRef<HTMLElement | null>(null);

  const updatePosition = () => {
    if (!dialogRef.current || !anchorRef.current) return;

    const rect = anchorRef.current.getBoundingClientRect();
    const dialog = dialogRef.current;

    dialog.style.position = "fixed";
    dialog.style.top = `${rect.bottom + gapTop}px`;
    dialog.style.left = `${rect.left + gapLeft}px`;

    // // --- Caja de referencia ---
    // const refTop = Math.min(Math.max(dialogRef.current.offsetHeight, 100), window.innerHeight * 0.15);
    // const refLeft = Math.min(Math.max(dialogRef.current.offsetWidth, 100), window.innerWidth * 0.15);
    // const refRight = window.innerWidth;
    // const refBottom = window.innerHeight;

    // // --- Cálculo de visibilidad ---
    // const popRect = dialog.getBoundingClientRect();
    // const visibleHeight =
    //   Math.max(0, Math.min(popRect.bottom, refBottom) - Math.max(popRect.top, refTop));
    // const visibleWidth =
    //   Math.max(0, Math.min(popRect.right, refRight) - Math.max(popRect.left, refLeft));

    // const visibleArea = visibleHeight * visibleWidth;
    // const totalArea = popRect.width * popRect.height;
    // const ratio = totalArea > 0 ? visibleArea / totalArea : 1;

    // dialog.style.opacity = `${ratio}`;
  };

  let isActive = false
  let idTime: NodeJS.Timeout

  const showPopover = (anchor: HTMLElement) => {
    if (!isActive) {
      anchorRef.current = anchor;
      updatePosition();
      dialogRef.current?.showPopover();
    }
  };

  const close = () => {
    dialogRef.current?.classList.add("aniReverse")
    isActive = true
    clearTimeout(idTime)
    idTime = setTimeout(() => {
      dialogRef.current?.hidePopover();
      anchorRef.current = null;
      dialogRef.current?.classList.remove("aniReverse")
      isActive = false
    }, 250)
  };

  const forceClose = () => {
    dialogRef.current?.classList.add("aniReverse")
    isActive = true
    clearTimeout(idTime)
    dialogRef.current?.hidePopover();
    anchorRef.current = null;
    dialogRef.current?.classList.remove("aniReverse")
    isActive = false
  };

  // Exponemos métodos
  useImperativeHandle(ref, () => ({
    showPopover,
    close,
    forceClose,
    this: dialogRef.current
  }));

  // Recalcular en scroll y resize
  useEffect(() => {
    const handle = () => updatePosition();
    window.addEventListener("scroll", handle, true);
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle, true);
      window.removeEventListener("resize", handle);
    };
  }, []);

  return (
    <dialog ref={dialogRef} className={"Popover " + className} popover="manual">
      <button
        type="button"
        title="Cerrar ventana"
        onClick={close}
        className={`absolute top-[10px] right-[10px] closeModal ${btnClose ? "" : "hidden"}`}
      >
        ✕
      </button>
      {children}
    </dialog>
  );
});

export default Popover;
