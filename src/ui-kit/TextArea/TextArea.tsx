import clsx from "clsx";
import { forwardRef, memo } from "react";
import type { DetailedHTMLProps, ForwardedRef, HTMLAttributes } from "react";
import "./TextArea.scss";

export interface ITextAreaProps extends DetailedHTMLProps<HTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  className?: string;
  name?: string;
  type?: string;
  error?: string;
};

const TextAreaComponent = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  (
    {
      className,
      name,
      type,
      error,
      ...rest
    }:ITextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ): JSX.Element => {
    return (
    <textarea className={clsx("TextArea", className, {
      TextArea__error: error,
    })}
      name={name}
      ref={ref}
      {...rest}
    />
    );
  });

TextAreaComponent.displayName = "FormTExtArea";

export const TextArea = memo(TextAreaComponent);