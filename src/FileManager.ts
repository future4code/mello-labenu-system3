import * as fs from "fs";

export class FileManager {
  constructor(private filePath: string) {}

  public setFilePath(path: string): void {
    this.filePath = path;
  }

  public writeFile(data: any): void {
    fs.writeFileSync(this.filePath, JSON.stringify(data));
  }

  public readFile(): any {
    const data: any = fs.readFileSync(this.filePath);
    const arr = [...data.toString()];
    const x = arr.length;
    arr.splice(0, x+1);
    return arr
  }
}
