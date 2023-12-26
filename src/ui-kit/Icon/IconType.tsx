import { newGuid } from "utils/guid";
import {
  CloseIcon,
  CheckboxIcon,
  RippleIcon,
  TelegramIcon,
  PlusIcon,
  MinusIcon,
  CenterIcon
} from "ui-kit/assets";
import { ReactComponent as ArrowDown } from "ui-kit/assets/icons/ArrowDown.svg";
import { ReactComponent as Pdf } from "ui-kit/assets/icons/files/Pdf.svg";

export type IconType =
  | "ArrowDown"
  | "Center"
  | "Checkbox"
  | "Close"
  | "Minus"
  | "Pdf"
  | "Plus"
  | "Ripple"
  | "Telegram";

export const IconTypes = new Map([
  ["ArrowDown", <ArrowDown key={newGuid()} />],
  ["Center", <CenterIcon key={newGuid()} />],
  ["Checkbox", <CheckboxIcon key={newGuid()} />],
  ["Close", <CloseIcon key={newGuid()} />],
  ["Minus", <MinusIcon key={newGuid()} />],
  ["Pdf", <Pdf key={newGuid()} />],
  ["Plus", <PlusIcon key={newGuid()} />],
  ["Ripple", <RippleIcon key={newGuid()} />],
  ["Telegram", <TelegramIcon key={newGuid()} />],
]);