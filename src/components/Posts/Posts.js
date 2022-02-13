import React from 'react'
import Post from './Post/Post.js'

import {useSelector} from 'react-redux'

import useStyles from './styles.js'

const Posts = () => {
  const posts=useSelector((state)=>state.posts);
  console.log(posts)
  const classes=useStyles();
  return (
    <>
        <h1 className='classes.heading'>Posts</h1>
        <Post/>
        <Post/>
    </>
  )
}

export default Posts