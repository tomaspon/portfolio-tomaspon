const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.post("/posts", async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
    }
    }
)