import { forwardRef, useImperativeHandle, useRef } from "react";
import './ToastPopover.css'
export type ToastType = "success" | "error" | "info";

export interface ToastHandle {
  show: (message: string, type?: ToastType, time?: number) => void;
  success: (message: string) => void;
  error: (message: string) => void;
  info: (message: string) => void;
}

// (anchor position handled via CSS)

const ToastPopover = forwardRef<ToastHandle, unknown>((_props, ref) => {
  const containerRef = useRef<HTMLElement | null>(null);

  useImperativeHandle(ref, () => ({
    show: (message: string, type: ToastType = "info", time?: number) => showMessage(message, type, time),
    success: (message: string) => showMessage(message, "success"),
    error: (message: string) => showMessage(message, "error"),
    info: (message: string) => showMessage(message, "info"),
  }));

  function showMessage(message: string, type: ToastType, time = 3000) {
    const containerMessage = document.createElement("div");
    containerMessage.classList.add("containerMsg", type);
    const text = document.createElement("span");
    text.textContent = message
    containerMessage.appendChild(text);
    if (containerRef.current) {
      containerRef.current.appendChild(containerMessage);
      containerRef.current.showPopover()
      setTimeout(() => {
        containerMessage.remove()
        if (!(containerRef.current as HTMLElement).querySelector(".containerMsg")) (containerRef.current as HTMLElement).hidePopover();
      }, time)
    } else {
      throw new Error("No se encuentra la referencia 'containerRef'")
    }
  }

  return (
    <section ref={containerRef} popover="manual" className="ToastPopover">
    </section>
  );
});

export default ToastPopover;
