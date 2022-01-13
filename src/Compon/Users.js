import React, {useEffect, useState} from 'react';


import User from "./User";
import {userServ} from "../Services/userServ";
import Post from "./Post";

const Users = () => {

    const [users, setUsers] = useState([])
    const [usersin, setUsersin] = useState(null)




    useEffect(() =>{
        userServ.getAll()
            .then(value => setUsers(value))
    },[])

    const getUseDet = (id) =>{
        userServ.getById(id)
            .then(value => setUsersin(value))
    }



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
            <div className={'forDetails'}>
                <div>{users.map(value => <User key ={value.id} user ={value} getUseDet={getUseDet}/>)}</div>
                { usersin && <div className={'details'}>{usersin?.value}-{usersin?.name}-{usersin?.email}-{usersin?.username} </div>}
            </div>
            <div>


            </div>
        </div>
    );
};

export default Users;

