import React, { useContext, useEffect, useState } from 'react'
import "./singlePage.scss"
import { useLocation } from "react-router-dom";
import { Context } from "../../../context/UserContext"
import axios from "axios"

const SinglePost = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState({})
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode, setUpdateMode] = useState(false)
    const { user } = useContext(Context)
    const PF = 'http://localhost:5000/images/'

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }
        getPost()
    },[path])

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {
                data: { username: user.username },
            })
            window.location.replace("/")
        } catch(err) {}
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {
                username: user.username,
                title,
                desc,
            })
            setUpdateMode(false)
        } catch (error) {
            
        }
    }

  return (
    <div>SinglePost</div>
  )
}

export default SinglePost