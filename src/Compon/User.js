import React from 'react';


const User = (props) => {

    const {user:{id,name}, getUseDet} = props

    return (
        <div>
            {id}-{name}
            <button onClick={()=>{getUseDet(id)}}>getUseDet</button>

        </div>
    );
};
export default User;














