export function CpfCnpj(type: string, value: string) {
  let valueFormat = "";
  if (type === "individual") {
    valueFormat = value
      .replace(".", "")
      .replace(".", "")
      .replace(".", "")
      .replace("-", "");
  } else {
    valueFormat = value
      .replace(".", "")
      .replace(".", "")
      .replace("/", "")
      .replace("-", "");
  }

  return valueFormat;
}
