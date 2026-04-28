export function capitalizeFirstLetter(str: string) {
  if (str.trim()) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  }
  return str;
}
