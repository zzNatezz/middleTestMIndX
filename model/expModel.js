import mongoose from "mongoose";

const {Schema} = mongoose;

const expSchema = new Schema({
    userId : {type:String, require : true},
    timeserving : {type:String, require : true},
    companyName : {type:String, require : true},
    roles : {type:[String], require : true},
});

const expModel = mongoose.model("Experience", expSchema);

export { expModel };