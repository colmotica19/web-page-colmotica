import {
  forwardRef,
  useRef,
  useImperativeHandle,
  useEffect,
  type ReactNode,
} from "react";
import "./Popover.css";

export interface PopoverHandle {
  showPopover: (anchor: HTMLElement) => void;
  close: () => void;
  forceClose: () => void;
  this: HTMLDialogElement | null;
}

const Popover = forwardRef<
  PopoverHandle,
  {
    children: ReactNode;
    className?: string;
    btnClose?: boolean;
    gapTop: number;
    gapLeft: number;
  }
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
  };

  let isActive = false;
  let idTime: NodeJS.Timeout;

  const showPopover = (anchor: HTMLElement) => {
    if (!isActive) {
      anchorRef.current = anchor;
      updatePosition();
      dialogRef.current?.showPopover();
    }
  };

  const close = () => {
    dialogRef.current?.classList.add("aniReverse");
    isActive = true;
    clearTimeout(idTime);
    idTime = setTimeout(() => {
      dialogRef.current?.hidePopover();
      anchorRef.current = null;
      dialogRef.current?.classList.remove("aniReverse");
      isActive = false;
    }, 250);
  };

  const forceClose = () => {
    dialogRef.current?.classList.add("aniReverse");
    isActive = true;
    clearTimeout(idTime);
    dialogRef.current?.hidePopover();
    anchorRef.current = null;
    dialogRef.current?.classList.remove("aniReverse");
    isActive = false;
  };

  // Exponer métodos al padre
  useImperativeHandle(ref, () => ({
    showPopover,
    close,
    forceClose,
    this: dialogRef.current,
  }));

  // Recalcular pos en scroll y resize
  useEffect(() => {
    const handle = () => updatePosition();
    window.addEventListener("scroll", handle, true);
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle, true);
      window.removeEventListener("resize", handle);
    };
  }, []);

  // 🔥 CERRAR CUANDO SE CLICKEA FUERA DEL POPOVER
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClick = (event: MouseEvent) => {
      if (!dialog.open) return;

      // Si se clickea dentro del popover → ignorar
      if (dialog.contains(event.target as Node)) return;

      // Si se clickea dentro del elemento que lo abre → ignorar
      if (anchorRef.current?.contains(event.target as Node)) return;

      // Cerrar normalmente
      close();
    };

    window.addEventListener("mousedown", handleClick);

    return () => window.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <dialog ref={dialogRef} className={"Popover " + className} popover="manual">
      <button
        type="button"
        title="Cerrar ventana"
        onClick={close}
        className={`absolute top-[10px] right-[10px] closeModal ${
          btnClose ? "" : "hidden"
        }`}
      >
        ✕
      </button>

      {children}
    </dialog>
  );
});

export default Popover;
