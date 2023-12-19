import type { FC } from "react";
import { Autocomplete, ETheme, /* useThemeContext */ } from "ui-kit";
import isNil from "lodash/isNil";
import { usePosts } from "./hooks";
import clsx from "clsx";
import "./AutocompletePage.scss";

export const AutocompletePage: FC = () => {
  const themeState = undefined; // useThemeContext();
  const theme = !isNil(themeState) ? /* themeState?.theme */ETheme.Light : ETheme.Light;

  const { isSelectOpened, onBlur, onChange, onFocus, onLoadOptions, selectedOption } = usePosts();

  return (
    <section>
      <h2>Autocomplete</h2>
      <Autocomplete
      className={clsx("AutocompletePage-Select", {
        "AutocompletePage-Select__active": isSelectOpened
      })}
      isMulti={false}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      loadOptions={onLoadOptions}
      theme={theme}
      value={selectedOption}
      />
      <div>
        <pre>
          {JSON.stringify(selectedOption, null, 2)}
        </pre>
      </div>    
    </section>
  )
}