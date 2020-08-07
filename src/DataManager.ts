import { Teacher } from "./Teacher";
import { Student } from "./Student";
import Mission from "./Mission";
import { FileManager } from "./FileManager";

// Desafio do projeto Nº3 gravação em arquivo TXT como proposto
// comentado para que a execução não cause erro  <<<<
/*
export const newMissionsList = new FileManager("missions.txt");
export const missionsList: Mission[] = newMissionsList.readFile();

export const newStudentsList = new FileManager("students.txt");
export const studentsList: Student[] = newStudentsList.readFile();

export const newTeachersList = new FileManager("teachers.txt");
export const teachersList: Teacher[] = newTeachersList.readFile();

*/
// código em execução - requisito original gravação em JSON.
export const newMissionsList = new FileManager("missions.json");
export const missionsList: Mission[] = newMissionsList.readFile();

export const newStudentsList = new FileManager("students.json");
export const studentsList: Student[] = newStudentsList.readFile();

export const newTeachersList = new FileManager("teachers.json");
export const teachersList: Teacher[] = newTeachersList.readFile();