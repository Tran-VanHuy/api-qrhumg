import { PostListModel } from "../models/PostListModel.js";

export const getDepartment = async (req, res) => {
  try {
    const posts = await PostListModel.find();

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const postDepartment = async (req, res) => {
  try {
    const newPost = req.body;
    const post = new PostListModel(newPost);
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const filterDepartment = async (req, res) => {
  try {
    var slug = req.params.slug;

    PostListModel.findOne({ slug: slug }, (err, item) => {
      res.status(200).json(item);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteDepartment = async (req, res) => {
  var id = req.params.id;
  PostListModel.findOneAndRemove({ _id: `${id}` }, function (err) {
    if (err) {
      return res.status(500).send();
    }

    return res.status(200).send();
  });
};

