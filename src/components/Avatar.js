import React from "react";
function Avatar(props){
    return(
    <img className='circle-img'
      src={props.imageURL}
      alt={props.alt}/>
    );
}

export default Avatar;