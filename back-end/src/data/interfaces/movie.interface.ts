import IPerson from "./person.interface";

export default interface IMovie {
  id: number;
  title: string;
  year: number;
  rating?: number;
  scoutbase_rating?: number;
  actors?: [IPerson];
  directors?: [IPerson];
}
