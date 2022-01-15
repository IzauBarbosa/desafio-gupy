interface AccountParams {
  id?: number;
  name: string;
  email: string;
  password: string;
  type: "candidate" | "interviewer" | "recruiter";
}

export class Account {
  public id?: number;
  public name: string;
  public email: string;
  public password: string;
  public type: "candidate" | "interviewer" | "recruiter";

  constructor({ id, name, email, password, type }: AccountParams) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.type = type;
  }
}
