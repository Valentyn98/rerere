
import {useEffect, useState} from "react";
import Post from "./Post";
// import Users from "../Users";
const Posts = () =>{
    let [posts, setPosts] = useState([])
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    },[])
    return(
        <div>
            {posts.map(value => <Post
                key={value.id}
                userId={value.userId}
                id={value.id}
                title={value.title}
                body={value.body}
                />)}
        </div>
    )
}
export default Posts;