import { Teacher } from "./Teacher";
import { Student } from "./Student";
import { FileManager } from "./FileManager";

export const newStudentsList = new FileManager("students.json");
export const studentsList: Student[] = newStudentsList.readFile();

export const newTeachersList = new FileManager("teachers.json");
export const teachersList: Teacher[] = newTeachersList.readFile();
