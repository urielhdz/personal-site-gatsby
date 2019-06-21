import React from 'react';
export default (props)=>{
  const article = props.post;
  return(
    <div className="shadow rounded mr-4 w-64 bg-white min-width-300">
      <header className="h-40 bg-blue-400"></header>
      <div className="p-4">
        <h4 className="font-bold">
          <a className="" href={article.link} target="_blank" rel="noopener noreferrer">{article.title} </a>

        </h4>
      </div>
    </div>
  );
}