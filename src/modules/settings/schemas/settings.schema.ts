import * as mongoose from 'mongoose';
import { UsersSchema } from 'src/modules/users/schemas/users.schema';
import { GrupoSchema } from './grupo.schema';

export const SettingsSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  foto: {
    type: String,
  },
  grupo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Grupo',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});
