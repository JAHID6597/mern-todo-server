import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const items = mongoose.model('items', itemSchema);
export default items;
