import { newGuid } from "utils/guid";
import { CloseIcon, CheckboxIcon } from "ui-kit/assets";
import { ReactComponent as ArrowDown } from "ui-kit/assets/icons/ArrowDown.svg";
import { ReactComponent as Pdf } from "ui-kit/assets/icons/files/Pdf.svg";

export type IconType = "ArrowDown" | "Checkbox" | "Pdf" | "Close";

export const IconTypes = new Map([
  ["ArrowDown", <ArrowDown key={newGuid()} />],
  ["Checkbox", <CheckboxIcon key={newGuid()} />],
  ["Pdf", <Pdf key={newGuid()} />],
  ["Close", <CloseIcon key={newGuid()} />],
]);