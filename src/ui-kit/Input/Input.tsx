import clsx from "clsx";
import { memo, forwardRef, useState } from "react";
import type { DetailedHTMLProps, ForwardedRef, HTMLAttributes } from "react";
import "./Input.scss";


export interface TInputProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  autoComplete?: string;
  className?: string;
  datatestId?: string;
  isFocused?: boolean;
  isRequired?: boolean;
  label?: string;
  value?: string;
  name?: string;
  type?: string;
  error?: string;
};

const InputComponent = forwardRef<HTMLInputElement, TInputProps>(
  (
    {
      autoComplete,
      className,
      datatestId = "uikit__input",
      isFocused: isInputFocused,
      isRequired,
      label,
      value,
      name,
      type,
      error,
      ...rest
    }: TInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <input className={clsx(className, "Input", {
        Input__active: isFocused,
        Input__error: error,
      })}
      autoComplete={autoComplete}
      name={name}
      type={type}
      ref={ref}
      {...rest} />
    );
  },
);

InputComponent.displayName = "InputComponent";

export const Input = memo(InputComponent);