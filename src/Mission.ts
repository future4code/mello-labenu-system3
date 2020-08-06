import moment from "moment";
import { Teacher } from "./Teacher";
import { Student } from "./Student";
import { FileManager } from "./FileManager";

const newStudentsList = new FileManager("students.json");
let studentsList: Student[] = newStudentsList.readFile();

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

  public addTeacher(teacher: Teacher) {
    this.teachers.push(teacher);
  }

  public addStudent(student: Student) {
    this.students.push(student);
  }

  public setName(name: string) {
    this.name = name;
  }

  public getAgeById(id: number): number {
    let age: number = 0;

    studentsList.find((student) => {
      if (student.id === id) {
        age = moment().diff(student.birthday, "years");
      }
    });
    return age;
  }
}
