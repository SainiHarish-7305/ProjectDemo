import { Schema, model } from 'mongoose';

const UserSummarySchema = new Schema({
  username: { type: String, required: true },
  currentPassword: { type: String, required: true },
  newPassword: { type: String, required: true },
  gender:{type: String, required: true},
  profession: { type: String, required: true },
  companyName: { type: String },
  address: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  subscriptionPlan: { type: String, enum: ['Basic', 'Pro', 'Enterprise'], required: true },
  newsletter: { type: Boolean, default: false }
});

export default model('UserSummary', UserSummarySchema);
