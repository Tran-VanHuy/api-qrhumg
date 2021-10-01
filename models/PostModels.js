import  mongoose  from "mongoose";

const schema = new mongoose.Schema({

      title: {

            type: String,
            required: true
      },
      content : {

            type : String,
            required: true
      },
      athour: {

            type : String,
            required : true,
            default : "Anonymos"
      },
      attachment: String,
}, {timestamps: true})

export const PostModel = mongoose.model('Post', schema)