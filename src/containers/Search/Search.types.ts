export interface IUser {
  id: number;
  login: string;
  repos?: IRepo[];
}

export interface IRepo {
  name: string;
  description: string;
  id: string;
  stargazers_count: number;
  owner: {
    id: number;
  };
}
