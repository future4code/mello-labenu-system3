import { Student } from "./Student";
import { Teacher } from "./Teacher";
import MainTaskManager from "./MainTaskManager";
import Mission from "./Mission";
import FullTimeMission from "./FullTimeMission";
import NightMission from "./NightMission";

const args = process.argv[2].toLowerCase();

const melloTeachers: Teacher[] = [];
const melloStudents: Student[] = [];

export const newMission: Mission = new FullTimeMission(
  0,
  "14/04/2020",
  "14/10/2020",
  melloTeachers,
  melloStudents,
  4
);

newMission.setName("Mello");

let turingTeachers: Teacher[] = [];
let turingStudents: Student[] = [];

export const newNightMission: Mission = new NightMission(
  1,
  "14/04/2020",
  "14/10/2020",
  turingTeachers,
  turingStudents,
  4
);

newNightMission.setName("Turing-na-night");

const newTaskManager = new MainTaskManager();

if (args === "students") {
  newTaskManager.printAllStudents();
} else {
  console.log(
    "Comando inválido! Digite 'npm run print students' ou 'npm run print teachers'."
  );
}

// newTaskManager.execute();
