import { useEffect } from "react";
import { Portal } from "../Portal";

export const OverlayingPopup = ({ children, onClose, isOpened }) => {
  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpened]);

  if (!isOpened) {
    return null;
  }

  return (
    <Portal>
      <div
        className="fixed inset-0 px-[20px] z-10 flex justify-center items-center"
        role="dialog"
      >
        <div
          className="absolute inset-0 cursor-pointer opacity-60 bg-neutral-black"
          tabIndex={0}
          role="button"
          onClick={onClose}
        />
        {children}
      </div>
    </Portal>
  );
};
