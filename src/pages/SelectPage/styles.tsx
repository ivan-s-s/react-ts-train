import { components } from "react-select";
import type { DropdownIndicatorProps, GroupBase, MultiValueRemoveProps } from "react-select";
import clsx from "clsx";
import { Icon } from "ui-kit";


export const StyledDropdownIndicator = (props: JSX.IntrinsicAttributes & DropdownIndicatorProps<unknown, boolean, GroupBase<unknown>>) => {
  const menuIsOpen = props.selectProps.menuIsOpen;

  return (
    <div className="Select-DropdownIndicator">
      <components.DropdownIndicator {...props}>
        {/* замена стрелки на ту, которую мы сами хотим */}
        <Icon className={clsx("Select-IconDropdownIndicator", {
          "Select-IconDropdownIndicator__open": menuIsOpen
        })} type="ArrowDown" />
      </components.DropdownIndicator>
    </div>
  );
};

export const StyleMultiValueRemove = (props: JSX.IntrinsicAttributes & MultiValueRemoveProps<unknown, boolean, GroupBase<unknown>>) => {
  return (
    <div className="Select-MultiValueRemove">
      <components.MultiValueRemove {...props}>
        <Icon type="Close" />
      </components.MultiValueRemove>
    </div>
  );
};