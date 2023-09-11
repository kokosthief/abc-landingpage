import { MainPopup } from "./MainPopup";

export const Notification = ({ isOpened, onClose, header, message }) => {
  return (
    <MainPopup
      header={header}
      isOpened={isOpened}
      onClose={onClose}
      className="max-w-[500px]"
    >
      <p className="body mt-1 text-neutral-black">{message}</p>
    </MainPopup>
  );
};
