import { add } from "date-fns";

export function getDataFromCode(code: String) {
  const baseYear = new Date(1997, 9, 7);

  const daysPassed = Number(code.slice(5, 9));
  const value = Number(`${code.slice(9, 17)}.${code.slice(17, 19)}`);

  const dueDate = add(baseYear, {
    days: daysPassed,
  });

  return {
    dueDate,
    value,
  };
}
