import { add } from "date-fns";

export function getDataFromCode(code: String) {
  // console.log(`codigo: ${code}`);

  const baseYear = new Date(1997, 9, 7);

  // console.log(`Ano base: ${baseYear}`);

  const daysPassed = Number([...code.slice(5, 9)].join(""));
  const value = Number([...code.slice(9, 19)].join(""));

  console.log(`Dias passados: ${daysPassed}`);
  console.log(`Valor: ${value}`);

  const dueDate = add(baseYear, {
    days: daysPassed,
  });

  console.log(`Ano final: ${dueDate}`);
}
