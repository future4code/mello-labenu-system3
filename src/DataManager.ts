import { Teacher } from "./Teacher";
import { Student } from "./Student";
import Mission from "./Mission";
import { FileManager } from "./FileManager";

// Desafio do projeto Nº3 gravação em arquivo TXT como proposto <<<<

export const newMissionsList = new FileManager("missions.txt");
export const missionsList: Mission[] = newMissionsList.readFile();

export const newStudentsList = new FileManager("students.txt");
export const studentsList: Student[] = newStudentsList.readFile();

export const newTeachersList = new FileManager("teachers.txt");
export const teachersList: Teacher[] = newTeachersList.readFile();

/* 

>>>> Início do projeto com gravação em JSON como requerido
Comentado para efetivação da tarefa, porém, funcional! <<<<

export const newMissionsList = new FileManager("missions.json");
export const missionsList: Mission[] = newMissionsList.readFile();

export const newStudentsList = new FileManager("students.json");
export const studentsList: Student[] = newStudentsList.readFile();

export const newTeachersList = new FileManager("teachers.json");
export const teachersList: Teacher[] = newTeachersList.readFile();
*/