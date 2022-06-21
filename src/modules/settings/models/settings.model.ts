import { Document } from 'mongoose';
import { User } from 'src/modules/users/models/users.model';
import { Grupo } from './grupo.model';

export interface Settings extends Document {
  id: string;
  foto: String;
  grupo: Grupo;
  user: User;
}
