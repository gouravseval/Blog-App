import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import service from "../Appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
       service.GetPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    }) 
    }, [])
    

    if(posts.length == 0){
        return(
            <h1 className='text-2xl'>No post avaliable</h1>
        )
    }
  return (
    <div className='w-full py-16'>
        <Container>
            <div className='flex flex-wrap align-middle justify-center'>
                {posts.map((post) => (
                    <div key={post.$id} className='mobile-post p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts