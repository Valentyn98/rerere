import React from 'react';

const User = (props) => {
    const {id, name,email,username,street,suite,city,zipcode,lat,lng,phone,website,names,catchPhrase,bs}= props;
    return (
        <div>
            {/*{id}--{name}--{surname}--{email}*/}
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>street: {street}</div>
            <div>suite: {suite}</div>
            <div>city: {city}</div>
            <div>zipcode: {zipcode}</div>
            <div>lat: {lat}</div>
            <div>lng: {lng}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <div>company-name: {names}</div>
            <div>catchPhrase: {catchPhrase}</div>
            <div>bs: {bs}</div>
        </div>
    );
};

export default User;