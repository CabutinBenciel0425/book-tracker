export function capitalizeFirstLetter(str: string) {
  if (str.trim()) {
    if (str.includes("-")) {
      return str
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("-");
    } else {
      return str.slice(0, 1).toUpperCase() + str.slice(1);
    }
  }
  return str;
}
