import { VideoIntroduce } from "../models/VideoIntroduce.js";

export const getVideoIntroduce = async (req, res) => {
  try {
    const getVideoIntroduce = await VideoIntroduce.find();
    res.status(200).json(getVideoIntroduce);
  } catch (error) {
    res.status(200).json(error);
  }
};
