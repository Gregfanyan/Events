type optionProps = {
  day: "numeric" | "2-digit" | undefined;
  month: "numeric" | "2-digit" | undefined;
  year: "numeric" | "2-digit" | undefined;
};
const options = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};

export const dateFormat = (date: Date) => {
  return date.toLocaleDateString("de-DE", options as optionProps);
};
