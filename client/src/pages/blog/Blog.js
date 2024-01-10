import { useLocation } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./blog.scss"
import React, { useEffect, useState } from 'react'
import Posts from "../../components/blog/posts/Posts"

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts()
  }, [search])

  return (
    <div>
      <Navbar />
      <div className="blog">
        <Posts posts={posts} />
      </div>
      <Footer />
    </div>
  )
}

export default Blog