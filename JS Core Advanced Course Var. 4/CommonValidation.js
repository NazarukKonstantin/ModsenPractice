export function isNum(value) {
  if (
    (!Number.isNaN(value) &&
      typeof value === "number" &&
      Number.isFinite(value)) ||
    typeof value === "bigint"
  ) {
    return true;
  }
  return false;
}