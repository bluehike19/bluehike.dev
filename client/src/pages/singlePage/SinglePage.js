import React from 'react'
import SinglePost from '../../components/blog/singlePost/SinglePost'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './singlePage.scss'

const SinglePage = () => {
  return (
    <>
    <Navbar />
    <div className='single'>
        <SinglePost />
    </div>
    <Footer />
    </>
  )
}

export default SinglePage