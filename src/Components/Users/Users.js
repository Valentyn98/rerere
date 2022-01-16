import React, {useEffect, useState} from 'react';


import User from "../User/User";
import {UserService} from "../../Services/user.service";

const Users = ({getUser}) => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        UserService.getAll().then(value => setUsers(value))
    },[])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user} getUser={getUser} />)}
        </div>
    );
};

export default Users;