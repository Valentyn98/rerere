import React, {useEffect, useState} from 'react';


import Post from "./Post";
const Posts = () => {

    const [posts, setPosts] = useState([])
    const [postDet, setPostDet] = useState(null)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    },[])


    const getPostsDet = (userId) =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPostDet(value))
    }

    return (
        <div>
            {posts.map(value => <Post key={value.id} post ={value} />)}
        </div>
    );
};

export default Posts;