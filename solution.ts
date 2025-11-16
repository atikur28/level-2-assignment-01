const formatValue = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return (value = value.toUpperCase());
  } else if (typeof value === "number") {
    return (value = value * 10);
  } else if (typeof value === "boolean") {
    return (value = !value);
  } else {
    console.log("Invalid input!");
  }
};
