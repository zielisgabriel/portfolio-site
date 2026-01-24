function isNumberOrNumberString(value: any): value is number | string {
  if (typeof value === "number" && Number.isFinite(value)) {
    return true;
  }
  
  if (typeof value === "string" && isFinite(Number(value))) {
    return true;
  }

  return false;
}