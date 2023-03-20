import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import Footer from './Footer';
import Header from './Header';
import Posts from './Posts';

const  Home  = () => {
    const [posts, setPosts ]= useState([""])
    
    const fetchPost = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      console.log(setPosts(response.data))
      console.log(response.data)
    }

    useEffect(() => {
        fetchPost()
    }, [])

        return(
                <div>
                    <div className="main">
                        <div className="wrapper">
                            <div className="wrapp">
                                <Header />                            
                                <div className="main">
                                    <div className="contain">
                                            <h1>Постхои моро истифода баред!</h1>
                                            <span></span>
                                        <div className="posts">
                                            <div className="cards">
                                                {posts.map((post) => 
                                                     <div className='menu'>
                                                        <div className="container">
                                                            <div className="post">
                                                                <div className="info">
                                                                    <h2>{post.id}. {post.title}</h2>
                                                                    <p>{post.body}</p>
                                                                </div>
                                                               </div>
                                                        </div>
                                                    </div>
                                                )}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
              )
    }    

    export  default Home