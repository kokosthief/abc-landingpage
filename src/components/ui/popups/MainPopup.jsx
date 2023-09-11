import classNames from "classnames";
import { ReactComponent as CloseIcon } from "../../../assets/close-icon.svg";
import { HeaderPopup } from "./HeaderPopup";
import { OverlayingPopup } from "./OverlayingPopup";

export const MainPopup = ({
  children,
  className,
  header,
  isOpened,
  onClose,
}) => {
  return (
    <OverlayingPopup isOpened={isOpened} onClose={onClose}>
      <div
        className={classNames("bg-white rounded-2xl p-4 ss:p-6 relative z-10", {
          [className]: className,
        })}
      >
        <CloseIcon
          onClick={onClose}
          className="absolute right-0 ss:right-[-24px] top-[-24px] cursor-pointer"
        />
        {header && <HeaderPopup {...header} />}
        {children}
      </div>
    </OverlayingPopup>
  );
};
