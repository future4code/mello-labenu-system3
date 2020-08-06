import moment from "moment";
import { newMission, newNightMission } from ".";

class MainTaskManager {
  public execute(): void {
    newMission.addTeacher(1, "João Pedro", "jpjp@gmail.com");
    newMission.addStudent(
      1,
      "Talita Alcântara",
      "tlt@gmail.com",
      moment("09/05/1994", "DD/MM/YYYY"),
      ["Programar"]
    );
  }
}
