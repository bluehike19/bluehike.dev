import React from 'react'
import "./post.scss"
import { Link } from 'react-router-dom'
import {IF} from '../../../url'


// {post.categories && Array.isArray(post.categories) && (
//     // Your mapping logic or code that utilizes post.categories here
//     post.categories.map(category => (
//       // Render category data here
//       <div key={category.id}>{category.name}</div>
//     )
//   )}

const Post = ({post}) => {
    // const PF = "http://localhost:5000/images/";
  return (
    <div className='post'>
        {post.photo &&  <img className='postImg' src={IF + post.photo}  alt='' />}
        <div className='postInfo'>
            <div className='postCats'>
                {post.categories && Array.isArray(post.categories) && ( post.categories.map((c) => (
                    <span className='postCat'>{c.name}</span>
                )))}
            </div>
            <Link to={`/post/${post._id}`} className="link">
                <span className='postTitle'>{post.title}</span>
            </Link>
            <hr />
            <span className='postDate'>
                {new Date(post.createdAt).toDateString()}
            </span>
        </div>
        <p className='postDesc'>{post.desc}</p>
    </div>
  )
}

export default Post