import React from 'react'
import "./posts.scss"
import Post from '../post/Post'

const Posts = ({posts}) => {
  return (
    <div className='posts'>
        {posts.map((post) => (
            <Post post={post} />
        ))}
    </div>
  )
}

export default Posts