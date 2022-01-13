import React, {useEffect, useState} from 'react';


import Post from "./Post";

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [postDet, setPostDet] = useState(null)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(valuet => valuet.json())
            .then(valuet => setPosts(valuet))
    },[])


    const getPostsDet = (userId) =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(valuet => valuet.json())
            .then(valuet => setPostDet(valuet))
    }

    return (
        <div>
            {posts.map(valuet => <Post key={valuet.id} post ={valuet} getPostsDet={getPostsDet} />)}

        </div>
    );
};

export default Posts;