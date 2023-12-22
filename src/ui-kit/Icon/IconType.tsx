import { newGuid } from "utils/guid";
import { CloseIcon, CheckboxIcon, RippleIcon } from "ui-kit/assets";
import { ReactComponent as ArrowDown } from "ui-kit/assets/icons/ArrowDown.svg";
import { ReactComponent as Pdf } from "ui-kit/assets/icons/files/Pdf.svg";

export type IconType = "ArrowDown" | "Checkbox" | "Close" | "Pdf" | "Ripple";

export const IconTypes = new Map([
  ["ArrowDown", <ArrowDown key={newGuid()} />],
  ["Checkbox", <CheckboxIcon key={newGuid()} />],
  ["Close", <CloseIcon key={newGuid()} />],
  ["Pdf", <Pdf key={newGuid()} />],
  ["Ripple", <RippleIcon key={newGuid()} />],
]);