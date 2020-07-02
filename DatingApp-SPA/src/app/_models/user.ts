import {Photo} from './photo';

export interface User {
  id: number;
  username: string;
  intorduction: string;
  gender: string;
  age: number;
  knownAs: string;
  created: Date;
  lastActive: Date;
  city: string;
  country: string;
  photoUrl: string;
  interests?: string;
  lookingFor?: string;
  photos?: Photo[];
}
