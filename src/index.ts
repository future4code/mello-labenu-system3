import { Student } from "./Student";
import { Teacher } from "./Teacher";
import MainTaskManager from "./MainTaskManager";
import Mission from "./Mission";
import FullTimeMission from "./FullTimeMission";
import NightMission from "./NightMission";

console.log('\n*=**=**=**=**=**=**=**=**=**=**=**=**=**=**=**=**=**=**=**=**=*\n');
console.log('---------------  Bem Vindo ao LABENUSYSTEM 3  ----------------\n')
console.log('*=**=**=**=**=**=**=**=**=**=**=**=**=**=**=**=**=**=**=**=**=*\n');


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

export const newTaskManager = new MainTaskManager();

// Este comando abaixo foi comentado para executar Script "run Print".
// deve ser descomentado para execução de testes.
// 
//newTaskManager.execute();