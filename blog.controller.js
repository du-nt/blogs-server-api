const Blog = require("./blog.model");

const getLatest = async (req, res) => {
  const blogs = await Blog.find()
    .sort({ _id: -1 })
    .limit(4);
  res.json(blogs);
};

const getAll = async (req, res) => {
  const { page } = req.query;
  const currentPage = parseInt(page, 10) || 1;
  const resultsPerPage = 8;

  const blogs = await Blog.find()
    .limit(resultsPerPage)
    .skip(resultsPerPage * (currentPage - 1));
  const total = await Blog.countDocuments();

  res.json({ blogs, total, currentPage, resultsPerPage });
};

const addBlog = async (req, res) => {
  const { title, content } = req.body;

  const newBlog = new Blog({
    title,
    content
  });
  await newBlog.save();
  res.json(newBlog);
};

module.exports = {
  getLatest,
  getAll,
  addBlog
};
