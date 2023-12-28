import clsx from "clsx";
import { memo } from "react";
import type { FC, FocusEvent } from "react";
import "./FormField.scss";

export type FormFieldType = "text" | "password" | "tel" | "textarea";

type TFromFieldProps = {
  className?: string;
  error?: string;
  label?: string;
  name?: string;
  type: FormFieldType;
  isFocused?: boolean;
  isRequired?: boolean;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
};

const FormFieldComponent: FC<TFromFieldProps> = ({
  className,
  error,
  label,
  name,
  type,
  isFocused,
  isRequired,
  onBlur,
  onFocus,
}) => {
  return (
    <div className={clsx("FormField", className, {
      FormField__active: isFocused,
    })}>
      <label className="FormField-Label" htmlFor={name}>
        {label}
        {isRequired && <span className="FormField-LabelRequired">*</span>}
      </label>
      {type === "text" && (
        <>
          <input className={clsx({
              Input__active: isFocused,
              Input__error: error,
            })}
            name={name}
            onBlur={onBlur}
            onFocus={onFocus}
            // error={error}
          />
          {error && <div className="FormField-ErrorMessage">{error}</div>}
        </>
      )}
    </div>
  );
};

export const FormField = memo(FormFieldComponent);