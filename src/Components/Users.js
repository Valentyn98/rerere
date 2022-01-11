import {useEffect, useState} from "react";
import User from "./User";
const  Users = () =>{
   let [users,setUsers] =  useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    },[])
    return (
        <div>
            {users.map(value => <User
                key={value.id}
                id={value.id}
                name={value.name}
                username={value.username}
                email={value.name}
                street={value.address.street}
                suite={value.address.suite}
                city={value.address.city}
                zipcode={value.address.zipcode}
                lat = {value.address.geo.lat}
                lng = {value.address.geo.lng}
                phone = {value.phone}
                website = {value.website}
                names = {value.company.name}
                catchPhrase = {value.company.catchPhrase}
                bs = {value.company.bs}
            />)}
        </div>
    );
};
export default Users;