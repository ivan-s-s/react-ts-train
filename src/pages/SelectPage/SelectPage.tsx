import type { FC } from "react";
import clsx from "clsx";
import isNil from "lodash/isNil";
import type { TSorting } from "ui-kit";
import { ETheme, Select, /* useThemeContext */ } from "ui-kit";
import { Hr } from "components";
import { useSelect } from "./hooks/useSelect";
import "./SelectPage.scss";
import { StyledDropdownIndicator } from "./styles";

type TProps = {
  onSortingChange?: (data: TSorting["value"]) => void;
  sorting?: TSorting["value"];
}

export const SelectPage: FC<TProps> = ({onSortingChange, sorting = "price_asc"}) => {
  const themeState = undefined; // useThemeContext();
  const theme = !isNil(themeState) ? /* themeState?.theme */ETheme.Light : ETheme.Light;

  const {
    isSelectOpened,
    multipleSelectedOption,
    onBlur,
    onChange,
    onFocus,
    options,
    selectedOption,
  } = useSelect();

  return (
    <section className="SelectPage">
      <h2>Select</h2>
      <Select
        className={clsx("SelectPage-Select", {
          "SelectPage-Select__active": isSelectOpened,
        })}
        components={{ DropdownIndicator: StyledDropdownIndicator }}
        isMulti={false}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        options={options}
        theme={theme}
        value={selectedOption}
      />
      <div>
        <pre>{JSON.stringify(selectedOption, null, 2)}</pre>
      </div>
      <Hr />
      <Select
        className={clsx("SelectPage-Select", {
          "SelectPage-Select__active": isSelectOpened,
        })}
        components={{ DropdownIndicator: StyledDropdownIndicator }}
        isMulti={true}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        options={options}
        theme={theme}
        value={multipleSelectedOption}
      />
      <div>
        <pre>{JSON.stringify(multipleSelectedOption, null, 2)}</pre>
      </div>
    </section>
  );
};