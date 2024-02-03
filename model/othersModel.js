import mongoose from "mongoose";

const {Schema} = mongoose;

const otherShema = new Schema({
    hobbit : String,
    target : String
});

const otherModel = mongoose.model("others", otherShema);

export { otherModel };