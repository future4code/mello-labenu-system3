import { newTaskManager } from "./index";

const firstArgs = process.argv[1];
const secondArgs = process.argv[2];

if (firstArgs.includes("PrintToConsole.ts") && secondArgs === "students") {
  newTaskManager.printAllStudents();
} else if (
  firstArgs.includes("PrintToConsole.ts") &&
  secondArgs === "teachers"
) {
  newTaskManager.printAllTeachers();
} else if (
  firstArgs.includes("PrintToConsole.ts") &&
  secondArgs !== "students"
) {
  console.log(
    "Comando inválido! Digite 'npm run print students' ou 'npm run print teachers'."
  );
}
