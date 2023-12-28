import clsx from "clsx";
import { memo, forwardRef } from "react";
import type { DetailedHTMLProps, ForwardedRef, HTMLAttributes } from "react";
import "./Input.scss";

export interface TInputProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
  name?: string;
  type?: string;
  error?: string;
};

const InputComponent = forwardRef<HTMLInputElement, TInputProps>(
  (
    {
      className,
      name,
      type,
      error,
      ...rest
    }: TInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {

    return (
      <>
        <input className={clsx(className, "Input", {
            Input__error: error,
          })}
          name={name}
          type={type}
          ref={ref}
          {...rest}
        />
      </>
    );
  },
);

InputComponent.displayName = "InputComponent";

export const Input = memo(InputComponent);