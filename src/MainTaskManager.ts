import moment from "moment";
import { TEACHER_SPECIALTY } from "./Teacher";
import { newMission, newNightMission } from ".";
import { studentsList, missionsList, newMissionsList } from "./DataManager";

export default class MainTaskManager {
  public execute(): void {
    newMission.addTeacher(1, "João Pedro", "jpjp@gmail.com", [
      TEACHER_SPECIALTY.BACKEND,
      TEACHER_SPECIALTY.CSS,
      TEACHER_SPECIALTY.OOP,
    ]);
    newMission.addTeacher(2, "Rogéria Batista", "rgb@gmail.com", [
      TEACHER_SPECIALTY.BACKEND,
      TEACHER_SPECIALTY.REACT,
      TEACHER_SPECIALTY.OOP,
    ]);

    newNightMission.addTeacher(
      3,
      "Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Gabriel Rafael Gonzaga",
      "pedrão@outlook.com",
      [
        TEACHER_SPECIALTY.REACT,
        TEACHER_SPECIALTY.REDUX,
        TEACHER_SPECIALTY.TESTS,
      ]
    );

    newNightMission.addTeacher(4, "", "jpjp@hotmail.com", [
      TEACHER_SPECIALTY.CSS,
      TEACHER_SPECIALTY.TESTS,
      TEACHER_SPECIALTY.OOP,
    ]);

    newMission.addStudent(
      1,
      "Talita Alcântara",
      "tlt@gmail.com",
      moment("09/05/1994", "DD/MM/YYYY"),
      ["Programar"]
    );

    newMission.addStudent(
      2,
      "Roberta Martins",
      "rms@gmail.com",
      moment("07/09/1998", "DD/MM/YYYY"),
      ["Estudar assobio lírico", "Andar de patins", "Jogar RPGs"]
    );

    newNightMission.addStudent(
      3,
      "Pedro Rodrigues",
      "pedrao@hotmail.com",
      moment("09/08/1997", "DD/MM/YYYY"),
      ["Andar de skate", "Jogar bola", "Ver memes no Reddit"]
    );

    missionsList.push(newMission, newNightMission);
    newMissionsList.writeFile(missionsList);
  }

  public printAllStudents(): void {
    console.log("ALUNOS \n");

    studentsList.map((student) => {
      console.log("Nome: ", student.name);
      console.log("Email: ", student.email);
      console.log("Curso: Desenvolvimento Web Full Stack");
      console.log("Turma: ", newMission.getName("Mello"));
      console.log("Idade: ", newMission.getAgeById(student.id), "\n");
    });
  }
}
