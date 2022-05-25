import mongoose, { Schema } from 'mongoose';

const ChatSchema = new Schema(
  {
    chat_name: { type: String },
    is_group: { type: Boolean, default: false },
    group_created_by: { type: Schema.Types.ObjectId, ref: 'User' },
    last_message: { type: Schema.Types.ObjectId, ref: 'Message' },
    participants: [{ type: Schema.Types.ObjectId, ref: 'User', min: 2 }],
    group_admins: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  },
  { timestamps: true }
);

export const ChatModel = mongoose.model('Chat', ChatSchema);
