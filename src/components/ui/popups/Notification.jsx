import { MainPopup } from "./MainPopup";

export const Notification = ({
  isClosing,
  isOpened,
  onClose,
  header,
  message,
}) => {
  return (
    <MainPopup
      header={header}
      isClosing={isClosing}
      isOpened={!!isOpened}
      onClose={onClose}
      className="ss:!max-w-[500px] ss:!min-w-[auto] !min-w-[90%] !max-w-[90%]"
    >
      <p className="body mt-1 text-neutral-black">{message}</p>
    </MainPopup>
  );
};
