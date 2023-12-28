import { newGuid } from "utils/guid";
import {
  ArrowDownIcon,
  CenterIcon,
  CheckboxIcon,
  CloseIcon,
  MinusIcon,
  PlusIcon,
  RippleIcon,
  TelegramIcon,
  VisibilityIcon,
  VisibilityOffIcon,
} from "ui-kit/assets";
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
  | "Telegram"
  | "Visibility"
  | "VisibilityOff";

export const IconTypes = new Map([
  ["ArrowDown", <ArrowDownIcon key={newGuid()} />],
  ["Center", <CenterIcon key={newGuid()} />],
  ["Checkbox", <CheckboxIcon key={newGuid()} />],
  ["Close", <CloseIcon key={newGuid()} />],
  ["Minus", <MinusIcon key={newGuid()} />],
  ["Pdf", <Pdf key={newGuid()} />],
  ["Plus", <PlusIcon key={newGuid()} />],
  ["Ripple", <RippleIcon key={newGuid()} />],
  ["Telegram", <TelegramIcon key={newGuid()} />],
  ["Visibility", <VisibilityIcon key={newGuid()} />],
  ["VisibilityOff", <VisibilityOffIcon key={newGuid()} />],
]);