export const normalizePhoneNumber = (telephoneNumber: string): string => {
  const PATTERN = /\D/g;
  let formattedInputValue = "";
  const inputNumberValue = telephoneNumber.replace(PATTERN, "");
  const firstSymbol = inputNumberValue[0] === "8" ? "8" : "+7";
  formattedInputValue = firstSymbol;
  if (firstSymbol === "8") {
    formattedInputValue = inputNumberValue;
  }
  if (firstSymbol === "+7") {
    formattedInputValue = "+" + inputNumberValue;
  } else {
    formattedInputValue = "+" + inputNumberValue;
  }
  return formattedInputValue;
};