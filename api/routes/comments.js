const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const Post = require('../models/Post')
const Comment = require('../models/Comment')

//CREATE
router.post('/create', async (req, res) => {
    try {
        const newComment = new Comment (req.body)
        const savedComment = await newComment.save()
        res.status(200).json(savedComment)
    } catch (err) {
        res.status(500).json(err)
    }
})

//UPDATE
router.delete('/:id', async (req, res) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, {$set:req.body}, {new: true})
        res.status(200).json(updatedComment)
    } catch (err) {
        res.status(500).json(err)
    }
})