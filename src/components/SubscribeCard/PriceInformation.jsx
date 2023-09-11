import classNames from "classnames";

export const PriceInformation = ({ className, perMonth, price, title }) => {
  return (
    <div
      className={classNames("flex", {
        [className]: className,
      })}
    >
      <div className="body-bold pt-0.5 pb-1 text-neutral-black mr-2">
        {title}
      </div>
      <div className="flex">
        <div className="btn-text text-pink-dark mr-1.5">{price}</div>
        {perMonth && (
          <div className="body-bold pt-0.5 pb-1 text-pink-dark">
            / per month
          </div>
        )}
      </div>
    </div>
  );
};
