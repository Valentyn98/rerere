import React, {useState} from 'react';

import Users from "./Components/Users/Users";
import UsersDetails from "./Components/UsersDetails/UsersDetails";
import Posts from "./Components/Posts/Posts";
import css from './App.module.css'
import {postService} from "./Services/post.service";

const App = () => {
    const [user, setUser] = useState(null)
    const [userId, setUserid] = useState(null)
    const [posts, setPosts] = useState([])


    const getUser = (user)=>{
        setUser(user)
    }
    const getUserId = (id) => {
        postService.getByUserID(id).then( value => setPosts([...value]))
        }


    return (
        <div>
            <div className={css.wrap}>
                <Users getUser={getUser}/>
                {user && <UsersDetails user={user} getUserId={getUserId}/>}
            </div>
            {!!posts.length &&<Posts posts={posts}/>}
        </div>
    );

}
export default App;
