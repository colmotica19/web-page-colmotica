import { forwardRef, useImperativeHandle, useRef } from "react";
import "./ToastPopover.css";

export type ToastType = "success" | "error" | "info";

export interface ToastHandle {
  show: (message: string, type?: ToastType, time?: number) => void;
  success: (message: string) => void;
  error: (message: string) => void;
  info: (message: string) => void;
}

const ToastPopover = forwardRef<ToastHandle>((_, ref) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useImperativeHandle(ref, () => ({
    show: (message, type = "info", time) => showMessage(message, type, time),
    success: (message) => showMessage(message, "success"),
    error: (message) => showMessage(message, "error"),
    info: (message) => showMessage(message, "info"),
  }));

  function showMessage(message: string, type: ToastType, time = 3000) {
    if (!containerRef.current) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;

    toast.textContent = message;
    containerRef.current.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("hide");
      setTimeout(() => toast.remove(), 200);
    }, time);
  }

  return <div ref={containerRef} className="toast-root" />;
});

export default ToastPopover;
