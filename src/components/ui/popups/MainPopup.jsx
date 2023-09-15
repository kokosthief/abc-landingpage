import { Dialog } from "@material-tailwind/react";
import classNames from "classnames";
import { ReactComponent as CloseIcon } from "../../../assets/close-icon.svg";
import { HeaderPopup } from "./HeaderPopup";

export const MainPopup = ({
  children,
  className,
  header,
  isClosing = true,
  isOpened,
  onClose,
}) => {
  return (
    <Dialog
      open={isOpened}
      handler={onClose}
      className={classNames(
        "bg-white rounded-2xl p-4 ss:p-6 relative z-10 focus:border-0 focus:outline-0",
        {
          [className]: className,
        }
      )}
    >
      {isClosing && (
        <CloseIcon
          onClick={onClose}
          className="absolute right-0 ss:right-[-24px] top-[-24px] cursor-pointer"
        />
      )}
      {header && <HeaderPopup {...header} />}
      {children}
    </Dialog>
  );
};
