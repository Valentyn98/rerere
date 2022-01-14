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

