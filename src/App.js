import React, {useState} from 'react';
import Users from "./Components/Users/Users";
import UsersDetails from "./Components/UsersDetails/UsersDetails";
import Posts from "./Components/Posts/Posts";
import css from './App.module.css'

const App = () => {
     const [user, setUser] = useState(null)
    const [userId, setUserid] = useState(null)

    useState(null)
    const getUser = (user)=>{
        setUser(user)
    }
    const getUserId = (id) => {

    }
    return (
        <div>
            <div className={css.wrap}>
                <Users getUser={getUser}/>
                {user && <UsersDetails user={user} getUserId={getUserId}/>}
            </div>
            <Posts/>
        </div>
    );
};

export default App;
