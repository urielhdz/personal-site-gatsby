import React from 'react';

export default (props)=>{
  const {posts} = props
  return(
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center">{props.title}</h2>
      {props.children}
      <div className="overflow-x-scroll pb-4">
        <div className="flex mt-8">
          {
            posts.map(post => (
              <props.card post={post} key={post.link} />
            ))
          }
        </div>
      </div>
      <div className="mt-8 text-center">
        <a href={props.link} className="my-btn" target="_blank" rel="noopener noreferrer"> {props.text} </a>
      </div>
    </div>
  );
}