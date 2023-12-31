import { memo } from "react";
import type { FC } from "react";
import { default as ReactAsyncSelect } from "react-select/async";
import clsx from "clsx";

import { ETheme } from "../enums";
import { useMounted } from "../hooks";
import type { TAsyncSelectProps } from "./types";
import { generateUUID } from "utils";
import { selectStyles } from "./selectStyles";
import "./Select.scss";

const AsyncSelectComponent: FC<TAsyncSelectProps> = ({
  className,
  components,
  defaultValue,
  getOptionLabel,
  id,
  instanceId,
  isMulti = false,
  isSearchable,
  loadOptions,
  menuPlacement,
  menuPosition,
  name,
  onBlur,
  onChange,
  onFocus,
  styles,
  theme = ETheme.Light,
  value
}) => {
  const uuid = generateUUID();
  const hasMounted = useMounted();

  return hasMounted ? (
    <ReactAsyncSelect
      className={clsx("Select", className)}
      components={components}
      defaultValue={defaultValue}
      getOptionLabel={getOptionLabel}
      id={id ? id : uuid}
      instanceId={instanceId ? instanceId : uuid}
      isMulti={isMulti}
      isSearchable={isSearchable}
      loadOptions={loadOptions}
      menuPlacement={menuPlacement}
      menuPosition={menuPosition}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      styles={!styles && theme ? selectStyles(theme) : styles}
      value={value}
    />
  ) : null;
};

export const AsyncSelect = memo(AsyncSelectComponent);