import { breakpoints } from "../../constants/breakpoints";
import { useWindowSize } from "../../hooks/useWindowSize";

export const WalletAddress = ({ address, title }) => {
  const { width } = useWindowSize();

  return (
    <div className="w-full">
      <h5 className="body-bold text-neutral-black mb-0.5">{title}</h5>
      <div className="body text-neutral-black">
        {width > breakpoints.ss
          ? address
          : `${address?.slice(0, 17)}...${address?.slice(-10)}`}
      </div>
    </div>
  );
};
