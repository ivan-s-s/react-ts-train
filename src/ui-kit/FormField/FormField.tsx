import clsx from "clsx";
import { memo, useState } from "react";
import type { FC, FocusEvent } from "react";
import "./FormField.scss";
import { Icon, Input } from "ui-kit";

export type FormFieldType = "text" | "password" | "tel" | "textarea";

type TFromFieldProps = {
  className?: string;
  error?: string;
  label?: string;
  name?: string;
  register?: (Ref, RegisterOptions?) => { onChange; onBlur; name; ref};
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
  register,
  type,
  isFocused,
  isRequired,
  onBlur,
  onFocus,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handlePasswordShow = () => {
    setIsShowPassword(prevState => !prevState);
  };

  const handleType = (type: string) => {
    if (type === "text") {
      return "text";
    };
    if (type === "password") {
      type = isShowPassword ? "text" : "password";
      return type;
    };
  };

  return (
    <div className={clsx("FormField", className, {
      FormField__active: isFocused,
    })}>
      <label className="FormField-Label" htmlFor={name}>
        {label}
        {isRequired && <span className="FormField-LabelRequired"> *</span>}
      </label>
      {type === "text" && (
        <>
          <Input className={clsx({
              Input__active: isFocused,
              Input__error: error,
            })}
            name={name}
            type={handleType(type)}
            {...register(name)}
            onBlur={onBlur}
            onFocus={onFocus}
            error={error}
          />
          {error && <div className="FormField-ErrorMessage">{error}</div>}
        </>
      )}
      {type === "password" && (
        <>
          <Input className={clsx({
              Input__active: isFocused,
              Input__error: error,
            })}
            name={name}
            type={handleType(type)}
            {...register(name)}
            onBlur={onBlur}
            onFocus={onFocus}
            error={error}
          />
          <div className="FormField-Visibility" onClick={handlePasswordShow}>
            { isShowPassword ? (
              <Icon type="Visibility" />
            ) : (
              <Icon type="VisibilityOff" />
            )}
          </div>
          {error && <div className="FormField-ErrorMessage">{error}</div>}
        </>
      )}
    </div>
  );
};

export const FormField = memo(FormFieldComponent);