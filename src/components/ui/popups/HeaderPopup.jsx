import { ReactComponent as AlertIcon } from "../../../assets/alert-icon.svg";
import { ReactComponent as LoadingIcon } from "../../../assets/loading-icon.svg";
import { ReactComponent as SuccessIcon } from "../../../assets/success-icon.svg";

const notificationTypeMap = {
  error: {
    Icon: <AlertIcon />,
    color: "text-error",
  },
  loading: {
    Icon: <LoadingIcon />,
    color: "text-pink-dark",
  },
  success: {
    Icon: <SuccessIcon />,
    color: "text-success",
  },
};

export const HeaderPopup = ({ title, status }) => {
  return (
    <div className="flex">
      {notificationTypeMap[status].Icon}
      <h3 className={`btn-text ${notificationTypeMap[status].color} ml-2`}>
        {title}
      </h3>
    </div>
  );
};
