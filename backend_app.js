const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost/social-media', { useNewUrlParser: true, useUnifiedTopology: true });

// Models
const User = mongoose.model('User', new mongoose.Schema({
  username: String,
  password: String, // You should hash passwords in production!
}));

const Post = mongoose.model('Post', new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  createdAt: { type: Date, default: Date.now }
}));

// Routes
app.post('/api/register', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send({ user });
});

app.post('/api/login', async (req, res) => {
  const user = await User.findOne({ username: req.body.username, password: req.body.password });
  if (!user) return res.status(401).send({ error: 'Invalid credentials' });
  res.send({ user });
});

app.post('/api/posts', async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.send({ post });
});

app.get('/api/posts', async (req, res) => {
  const posts = await Post.find().populate('author', 'username').sort('-createdAt');
  res.send({ posts });
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));