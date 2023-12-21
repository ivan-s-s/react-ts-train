import clsx from "clsx";
import { memo } from "react";
import type { ChangeEvent, FC } from "react";
import { Icon } from "ui-kit";
import "./CheckboxGroup.scss";

export type TCheckboxGroupProps = {
  className?: string;
  checkedBoxByGroup: any;
  id: string;
  label: string;
  nameGroup: string;
  onChange: (event: ChangeEvent<HTMLInputElement>, nameGroup: string) => void;
};

export const CheckboxGroupComponent: FC<TCheckboxGroupProps> = ({
  className,
  checkedBoxByGroup,
  id,
  label,
  nameGroup,
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event, nameGroup);
  };

  const isChecked: boolean = checkedBoxByGroup[nameGroup].includes(label);
  return (
    <div className={clsx("Checkbox-Wrapper", className)}>
      <input
        checked={isChecked}
        className="Checkbox"
        id={id}
        name={label}
        value={label}
        type="checkbox"
        onChange={handleChange}
      />
      {label && (
        <label className="Checkbox-Label" htmlFor={id}>
          <Icon className="Checkbox-Icon" type="Checkbox" />
          <span>{label}</span>
        </label>
      )}
    </div>
  );
};

export const CheckboxGroup = memo(CheckboxGroupComponent);