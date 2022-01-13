import React from 'react';


const Post = (Postprops) => {
    const {post:{id,title,body}} = Postprops
    return (
        <div>
            {id}-{title}-{body}
            {/*<button onClick={()=>{getPostsDet(userId)}}>getPostsDet</button>*/}
        </div>
    );
};

export default Post;