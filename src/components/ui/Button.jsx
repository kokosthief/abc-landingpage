import classNames from "classnames";

export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={classNames(
        "max-w-[500px] bg-pink-dark py-[15px] px-[30px] w-full hover:bg-pink-dark-hover text-white btn-text disabled:opacity-60 rounded-[90px] ease-in-out duration-300",
        {
          [className]: className,
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};
