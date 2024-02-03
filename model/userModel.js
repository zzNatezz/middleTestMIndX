import mongoose from "mongoose";

const {Schema} = mongoose;

const UserSchema = new Schema({
  fullName: {type: String , require : true},
  birthday: {type: String , require : true},
  birthPlace: {type: String , require : true},
  education: {type: String , require : true},
  Skills: {type: String , require : true},
});

const UserModel = mongoose.model("user", UserSchema);

export { UserModel };