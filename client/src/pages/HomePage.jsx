
import { useEffect, useState } from 'react'
import Post from '../components/Post'

function HomePage() {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/post').then((response)=>{
      response.json().then(posts=>{
        setPosts(posts)
      })
    })
  },[])
  return (
    <>
    {posts.length>0 && posts.map(post=>(
        <Post {...post} key={post._id}/>
    ))}

    </>
  )
}

export default HomePage