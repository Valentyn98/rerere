import React from 'react';

const User = (props) => {

    const {user:{id,name}, getUseDet} = props
    // const {userin:{username,id,name}, getUsePost} = props
    return (
        <div>
            {id}-{name}
            <button onClick={()=>{getUseDet(id)}}>getUsePost</button>

        </div>
    );
};

export default User;