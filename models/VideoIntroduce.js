import mongoose from "mongoose"

const schema = mongoose.Schema({

      title: {

            type : String,
            require: true
      },
      video: String
}, {timestamps: true})

export  const VideoIntroduce = mongoose.model("videointroduce", schema)