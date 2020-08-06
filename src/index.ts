import moment from "moment";
import Mission from "./Mission";
import FullTimeMission from "./FullTimeMission";
import NightMission from "./NightMission";
import { FileManager } from "./FileManager";
import { Teacher, TEACHER_SPECIALTY } from "./Teacher";
import { Student } from "./Student";

// CRIAÇÃO DE PROFESSORES
const newTeachersList = new FileManager("teachers.json");
let teachersList: Teacher[] = newTeachersList.readFile();

const newTeacher: Teacher = new Teacher(3, "Ana Paula", "ap@hotmail.com", [
  TEACHER_SPECIALTY.BACKEND,
  TEACHER_SPECIALTY.TESTS,
  TEACHER_SPECIALTY.OOP,
]);

const newTeacherTwo: Teacher = new Teacher(
  122,
  "Joaquim Rodrigues",
  "joaq@gmail.com",
  [TEACHER_SPECIALTY.CSS, TEACHER_SPECIALTY.REACT, TEACHER_SPECIALTY.TYPESCRIPT]
);

const checkTeacherId = (): boolean => {
  for (let teacher of teachersList) {
    if (teacher.id === newTeacher.id || teacher.id === newTeacherTwo.id) {
      return false;
    }
  }
  return true;
};

const createNewTeachers = (): void => {
  if (checkTeacherId() === false) {
    console.log("O ID inserido é inválido. Tente novamente com outro ID.");
  } else {
    teachersList.push(newTeacher, newTeacherTwo);
    newTeachersList.writeFile(teachersList);
  }
};
createNewTeachers();

// CRIAÇÃO DE ALUNOS
const newStudentsList = new FileManager("students.json");
let studentsList: Student[] = newStudentsList.readFile();

const newStudent: Student = new Student(
  1,
  "Pietro Oliveira",
  "mi@outlook.com",
  moment("10/10/2000", "DD/MM/YYYY"),
  ["jogar bola"]
);

const newStudentTwo: Student = new Student(
  2,
  "Valentina Moraes",
  "val@outlook.com",
  moment("23/11/1976", "DD/MM/YYYY"),
  ["andar de skate"]
);

studentsList.push(newStudent, newStudentTwo);
// newStudentsList.writeFile(studentsList);

// CRIAÇÃO DE TURMAS
const newMissionsList = new FileManager("missions.json");
let missionsList: Mission[] = newMissionsList.readFile();

const newMission: Mission = new FullTimeMission(
  0,
  "14/04/2020",
  "14/10/2020",
  teachersList,
  studentsList,
  4
);

newMission.setName("Mello");

const newNightMission: Mission = new NightMission(
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
