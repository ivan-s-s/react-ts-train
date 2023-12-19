import { newGuid } from "utils/guid";
import { CloseIcon } from "ui-kit/assets";
import { ReactComponent as ArrowDown } from "ui-kit/assets/icons/ArrowDown.svg";
import { ReactComponent as Pdf } from "ui-kit/assets/icons/files/Pdf.svg";

export type IconType = "ArrowDown" | "Pdf" | "Close";

export const IconTypes = new Map([
  ["ArrowDown", <ArrowDown key={newGuid()} />],
  ["Pdf", <Pdf key={newGuid()} />],
  ["Close", <CloseIcon key={newGuid()} />],
]);