import clsx from "clsx";
import { memo, forwardRef } from "react";
import type { ChangeEvent, DetailedHTMLProps, ForwardedRef, HTMLAttributes, KeyboardEvent,ClipboardEvent } from "react";
import "./InputPhone.scss";

export interface IInputPhoneProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
  name?: string;
  type?: string;
  error?: string;
};

// +7 (996) 6 3 9 - 8 9 - 8 7 (18 символов)
// 123456789101112131415161718

const InputPhoneComponent = forwardRef<HTMLInputElement, IInputPhoneProps>(
  (
    {
      className,
      name,
      type,
      error,
      ...rest
    }: IInputPhoneProps,
    ref: ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
    const PATTERN = /\D/g;
    const getInputNumbersValue = (value: string) => {
      return value.replace(PATTERN, "");
    };

    const handlePhoneInput = (event: ChangeEvent<HTMLInputElement>) => {
      const input = event.target;
      let inputNumbersValue = getInputNumbersValue(input.value);
      let formattedInputValue = "";
      const selectionStart = input.selectionStart;

      if (!inputNumbersValue) {
        return (input.value = "");
      }

      if (input.value.length !== selectionStart) {
        return;
      }

      if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
        // Russian Phone Number
        if (inputNumbersValue[0] === "9") {
          inputNumbersValue = "7" + inputNumbersValue;
        }

        const firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
        formattedInputValue = firstSymbols + " ";

        if (inputNumbersValue.length > 1) {
          formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
        }

        if (inputNumbersValue.length >= 5) {
          formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
        }

        if (inputNumbersValue.length >= 8) {
          formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
        }

        if (inputNumbersValue.length >= 10) {
          formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
        }
      } else {
        // Not Russian Phone Number
        formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
      }

      input.value = formattedInputValue;
    };

    const handlePhoneKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      // Remove First Symbol
      const input = event.target as HTMLInputElement;
      if (
        event.key === "Backspace" && getInputNumbersValue(input.value).length === 1
      ) {
        input.value = "";
      }
      return input;
    };

    const handlePhonePaste = (event: ClipboardEvent<HTMLInputElement>) => {
      const pasted = event.clipboardData ?? window["clipboardData"];
      const input = event.target as HTMLInputElement;
      const inputNumbersValue = getInputNumbersValue(input.value);

      if (pasted) {
        const pastedText = pasted.getData("Text");
        if (PATTERN.test(pastedText)) {
          input.value = inputNumbersValue;
        }
      }
    };

    return (
      <>
        <input className={clsx(className, "Input", {
            Input__error: error,
          })}
          maxLength={18}
          name={name}
          ref={ref}
          type={type}
          onInput={handlePhoneInput}
          onKeyDown={handlePhoneKeyDown}
          onPaste={handlePhonePaste}
          {...rest}
        />
      </>
    );
  },
);

InputPhoneComponent.displayName = "InputComponent";

export const InputPhone = memo(InputPhoneComponent);