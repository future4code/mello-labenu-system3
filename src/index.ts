import moment from "moment";
import Mission from "./Mission";
import FullTimeMission from "./FullTimeMission";
import NightMission from "./NightMission";
import { FileManager } from "./FileManager";
import { studentsList, teachersList } from "./Data";

// CRIAÇÃO DE TURMAS
const newMissionsList = new FileManager("missions.json");
let missionsList: Mission[] = newMissionsList.readFile();

export const newMission: Mission = new FullTimeMission(
  0,
  "14/04/2020",
  "14/10/2020",
  teachersList,
  studentsList,
  4
);

newMission.setName("Mello");

export const newNightMission: Mission = new NightMission(
  1,
  "14/04/2020",
  "14/10/2020",
  teachersList,
  studentsList,
  4
);

newNightMission.setName("Turing-na-night");

missionsList.push(newMission, newNightMission);
newMissionsList.writeFile(missionsList);

console.log(newMission.getAgeById(2));

// CRIAÇÃO DE PROFESSORES
newMission.addTeacher(1, "João Pedro", "jpjp@gmail.com");

// CRIAÇÃO DE ALUNOS
newMission.addStudent(
  1,
  "Talita Alcântara",
  "tlt@gmail.com",
  moment("09/05/1994", "DD/MM/YYYY"),
  ["Programar"]
);
// newStudentsList.writeFile(studentsList);
