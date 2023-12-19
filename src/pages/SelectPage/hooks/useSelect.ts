import { useEffect, useState } from "react";
import { MultiValue, OnChangeValue, SingleValue } from "react-select";
import { TSelectMultiType, TSelectOption } from "ui-kit";
import isNil from "lodash/isNil";

export const useSelect = () => {
  const PRICE_UP = "ascending price";
  const PRICE_DOWN = "descending_price";

  const options: TSelectOption[] = [
    {value: "price_asc", label: PRICE_UP},
    {value: "price_desc", label: PRICE_DOWN},
  ];

  const [isSelectOpened, setIsSelectOpened] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [selectedOption, setSelectedOption] = useState<SingleValue<TSelectOption | MultiValue<TSelectOption>>>({
    value: "price_asc",
    label: PRICE_UP,
  });
  const [multipleSelectedOption, setMultipleSelectedOption] = useState<SingleValue<TSelectOption | MultiValue<TSelectOption>>>({
    value: "price_asc",
    label: PRICE_UP,
  });

  const handleChange = (selectedOption?: OnChangeValue<TSelectOption, TSelectMultiType>) => {
    if (isNil(selectedOption)) return;
    if (Array.isArray(selectedOption)) {
      setMultipleSelectedOption(selectedOption);
    } else {
      const selectedOptionSingle = selectedOption as TSelectOption;
      setSelectedOption(selectedOptionSingle);
    }
    setIsSubmitting(prevState => !prevState);
  };

  const handleBlur = () => {
    setIsSelectOpened(false);
  }

  const handleFocus = () => {
    setIsSelectOpened(true);
  }

  useEffect(() => {
    if (!isSubmitting) return;
    setIsSubmitting(prevState => !prevState);
  }, [isSubmitting, setIsSubmitting]);

  return {
    isSelectOpened,
    multipleSelectedOption,
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus,
    options,
    selectedOption,
  }
};