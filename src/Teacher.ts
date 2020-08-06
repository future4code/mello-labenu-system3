import User from "./User";

export enum TEACHER_SPECIALTY {
  REACT = "REACT",
  REDUX = "REDUX",
  CSS = "CSS",
  TESTS = "TESTS",
  TYPESCRIPT = "TYPESCRIPT",
  OOP = "OOP",
  BACKEND = "BACKEND",
}

export class Teacher implements User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public idade: number,
    public specialties: TEACHER_SPECIALTY[]
  ) {}
}
