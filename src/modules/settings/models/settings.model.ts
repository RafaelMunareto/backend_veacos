import { Document } from 'mongoose';
import { User } from 'src/modules/users/models/users.model';
import { Grupo } from './grupo.model';

export interface Settings extends Document {
  id: string;
  urlImagem: string;
  grupo: Grupo;
  user: User;
}