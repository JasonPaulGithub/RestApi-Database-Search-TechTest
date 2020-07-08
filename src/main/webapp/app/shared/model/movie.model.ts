export interface IMovie {
  id?: string;
  movie?: string;
  director?: string;
  rating?: number;
}

export class Movie implements IMovie {
  constructor(public id?: string, public movie?: string, public director?: string, public rating?: number) {}
}
