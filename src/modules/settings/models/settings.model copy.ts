import { Document } from 'mongoose';
import { User } from 'src/modules/users/models/users.model';

export interface Grupo extends Document {
  id: string;
  grupo: string;
}
