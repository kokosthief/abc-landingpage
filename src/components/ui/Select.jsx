import classNames from "classnames";
import ReactSelect from "react-select";
import { ReactComponent as ChevronDown } from "../../assets/chevron-down.svg";
import { ReactComponent as ChevronUp } from "../../assets/chevron-up.svg";

const customStyles = {
  control: ({ isFocused }) =>
    classNames("rounded-[90px] hover:border-pink-dark border-2", {
      "border-pink-dark shadow-[0_0_0_4px_#FFE5EF] !outline !outline-4 !outline-pink-light":
        isFocused,
      "border-neutral-gray": !isFocused,
    }),
  valueContainer: () => "p-3.5 m-0 text-neutral-black body",
  input: () => " p-0 m-0",
  menu: () =>
    "py-1 px-0 shadow-[2px_2px_12px_0px_rgba(10,10,10,0.16)] rounded-[1rem] bg-white",
  menuList: () =>
    "overflow-auto !max-h-[206px] ::-webkit-scrollbar:w-[16px] scroll",
  option: () =>
    "py-[7px] px-4 body text-neutral-black mb-1 last-of-type:mb-0 hover:bg-pink-light",
};

const CustomIndicatorsContainer = ({ selectProps: { menuIsOpen } }) => (
  <div className="p-3.5">{menuIsOpen ? <ChevronUp /> : <ChevronDown />}</div>
);

export const Select = ({ options, ...props }) => {
  return (
    <ReactSelect
      unstyled
      components={{ IndicatorsContainer: CustomIndicatorsContainer }}
      isSearchable={false}
      classNames={customStyles}
      options={options}
      {...props}
    />
  );
};
