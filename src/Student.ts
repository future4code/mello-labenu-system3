import User from "./User";
import moment from "moment";

export class Student implements User {
  constructor() {}

  public getAge(): number {
    return 0; // mock
  }
}
