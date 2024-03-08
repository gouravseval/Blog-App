import React, { useEffect, useState } from 'react'
import sevice from "../Appwrite/config";
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Home() {
    const loginStatus = useSelector(state => state.auth.status)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        sevice.GetPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (loginStatus == false) {
        return (
            <div className="home w-full text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <span>
                                <div className='text-5xl font-bold '>Welcome to PADHLE BHAI</div>
                                <br />
                                <div >Your are not Logged In</div>
                                 <br />
                                <h1>
                                    <Link className='home-login-link text-2xl font-bold text-text hover:border-b border-text' to="/login">
                                        Click here to login
                                    </Link>
                                </h1>
                            </span>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8 '>
            <Container>
                <div className='home-post'>
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

export default Home