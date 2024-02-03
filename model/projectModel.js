import mongoose from "mongoose";

const {Schema} = mongoose;

const projecSchema = new Schema({
userId : {type: String , require : true},
  name: {type: String , require : true},
  content: {type: String , require : true},
  purpose: {type: String , require : true},
  start: {type: String , require : true},
  end: {type: String , require : true},
});

const projectModel = mongoose.model("project", projecSchema);

export { projectModel };