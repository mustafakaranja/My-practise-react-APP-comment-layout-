import React from "react";
import  faker from "faker";


const CommentDetail = () =>{
    return ( 
         <div className="detail">
              <a href="/" className="avatar">
                  <img alt="avatar" src={faker.image.avatar()}/>
              </a>
              <div className="content" >
                  <a href ="/" className='author'>
                      Sam
                  </a>
                  <div className="metadata">
                      <span className="date">today's time is 10:07am</span>
                  </div>
                  <div className="bio">
                  hey! how's my blog.
                  </div>
              </div>
            </div>
    );
};

export default CommentDetail;