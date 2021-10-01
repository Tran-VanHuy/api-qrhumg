import { createRequire } from "module";
const require = createRequire(import.meta.url);
import mongoose from "mongoose";

const mongoose1 = require("mongoose");

const slug = require("mongoose-slug-generator");

mongoose1.plugin(slug);

const schema = new mongoose1.Schema(
  {
    title: {
      type: String,
      required: true,
      default: "",
    },
    img_title: String,
    img_logo: String,
    img_persion: String,
    video: String,
    images: String,
    content: {
      type: String,
      required: true,
      default: "",
    },
    likecout: {
      type: Number,
      default: 0,
    },
    slug: { type: String, slug: "title", unique: true },
  },
  { timestamps: true }
);

export const PostListModel = mongoose.model("department", schema);

// schema.pre("save", function (next) {
//   this.slug = slugify(this.title);
//   next();
// });

// function slugify(text) {
//   return text
//     .toString()
//     .toLowerCase()
//     .replace(/\s+/g, "-") // Replace spaces with -
//     .replace(/[^\w\-]+/g, "") // Remove all non-word chars
//     .replace(/\-\-+/g, "-") // Replace multiple - with single -
//     .replace(/^-+/, "") // Trim - from start of text
//     .replace(/-+$/, ""); // Trim - from end of text
// }
