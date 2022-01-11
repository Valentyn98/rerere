
import {useEffect, useState} from "react";
import Comment from "./Comment";
const Comments = () =>{
    let[comments, setComments] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json)
            .then(value => setComments(value))
    },[])
    return (
        <div>
            {comments.map(value => <Comment
                key={value.id}
                postId={value.postId}
                id={value.id}
                name={value.name}
                email={value.name}
                body={value.body}
                />)}
        </div>
    )
}
export default Comments;