import {
  studentsList,
  newStudentsList,
  teachersList,
  newTeachersList,
} from "./Data";
import moment from "moment";
import { Teacher, TEACHER_SPECIALTY } from "./Teacher";
import { Student } from "./Student";

export default abstract class Mission {
  private name: string = "";

  constructor(
    private id: number,
    private startDate: string,
    private endDate: string,
    private teachers: Teacher[] = [],
    private students: Student[] = [],
    private currentModule?: number
  ) {}

  public getId(): number {
    return this.id;
  }

  public getName(name: string): string {
    return this.name;
  }

  public getStartDate(): string {
    return this.startDate;
  }

  public getEndDate(): string {
    return this.endDate;
  }

  public getCurrentModule(): number | undefined {
    return this.currentModule;
  }

  public addTeacher(id: number, name: string, email: string) {
    const newTeacher: Teacher = new Teacher(id, name, email, [
      TEACHER_SPECIALTY.BACKEND,
      TEACHER_SPECIALTY.TESTS,
      TEACHER_SPECIALTY.OOP,
    ]);

    const checkTeacherId = (): boolean => {
      for (let teacher of teachersList) {
        if (teacher.id === newTeacher.id) {
          return false;
        }
      }
      return true;
    };

    const createNewTeachers = (): void => {
      if (checkTeacherId() === false) {
        console.log("O ID inserido é inválido. Tente novamente com outro ID.");
      } else {
        teachersList.push(newTeacher);
        newTeachersList.writeFile(teachersList);
      }
    };

    createNewTeachers();
  }

  public addStudent(
    id: number,
    name: string,
    email: string,
    birthDate: moment.Moment,
    hobbies: string[]
  ) {
    const newStudent: Student = new Student(
      id,
      name,
      email,
      birthDate,
      hobbies
    );

    studentsList.push(newStudent);
    newStudentsList.writeFile(newStudent);
  }

  public setName(name: string) {
    this.name = name;
  }

  public getAgeById(id: number): number {
    let age: number = 0;

    studentsList.find((student) => {
      if (student.id === id) {
        age = moment().diff(student.birthDate, "years");
      }
    });
    return age;
  }
}
