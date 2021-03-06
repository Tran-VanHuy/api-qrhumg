import { PostModel } from "../models/PostModels.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createPost = async (req, res) => {
  try {
    const newPost = req.body;
    const post = new PostModel(newPost);
    await post.save();

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updatePost = async (req, res) => {
  try {
    const updatePost = req.body;
    const post = new PostModel.findOneAndUpdate(
      { _id: updatePost._id },
      updatePost,
      { new: true }
    );

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteData = async (req, res) => {
  var id = req.params.id;
  PostModel.findOneAndRemove({ _id: `${id}` }, function (err) {
    if (err) {
      return res.status(500).send();
    }

    return res.status(200).send();
  });
};

export const putData = (req, res, next) => {
  PostModel.findByIdAndUpdate({ _id: req.params.id }, req.body).then(
    function () {
      PostModel.findOne({ _id: req.params.id }).then(function (item) {
        res.send(item);
      });
    }
  );
};
