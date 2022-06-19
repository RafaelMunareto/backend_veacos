import * as mongoose from 'mongoose';

export const SettingsSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  foto: {
    type: String,
  },
  grupo: {
    type: String,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
});
