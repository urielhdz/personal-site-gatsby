import React from 'react';
export default (props)=>{
  const { post } = props;
  return (
    <div className="shadow bg-white rounded m-4 min-width-300" >
      <header style={{ "backgroundImage": `url(${post.thumbnail})` }} className="h-40 bg-cover bg-center"></header>
      <div className="p-4">
        <h4 className="font-bold">
          <a className="text-pink-600" href={post.link} target="_blank" rel="noopener noreferrer">{post.title} </a>

        </h4>
      </div>
    </div>
  )
}