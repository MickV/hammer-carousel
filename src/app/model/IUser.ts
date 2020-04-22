import { IVideo } from './IVideo';

export interface IUser {
  id: number;
  name: string;
  videos: IVideo[];
}
