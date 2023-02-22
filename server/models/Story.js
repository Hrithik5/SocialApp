import mongoose from "mongoose";

const StorySchema = mongoose.Schema (
 {
  title: String,
  hashtags: String,
 },
 {timpestamp : true}
);

const Story = mongoose.model("Story", StorySchema);

export default Story;