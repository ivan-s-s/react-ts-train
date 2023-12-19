import type { FC } from "react";
import { AsyncSelect } from "ui-kit";
import type { TAutocompleteProps } from "./types";

export const Autocomplete: FC<TAutocompleteProps> = (props) => {
  return <AsyncSelect {...props}/>;
}