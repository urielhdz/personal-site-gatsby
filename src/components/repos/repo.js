import React from 'react';
import iconLink from 'heroicons-ui/icons/icon-link.svg';

export default (props)=>{
  const { repo } = props;
  return(
    <li key={repo.id} className="flex items-center">
      <div className="flex-1">
        <div className="w-full">          
          <h4 className="text-pink-600 font-bold">{repo.name}</h4>
          <p className="text-sm text-gray-800 overflow-y-hidden" style={{height: "1.5em"}}>{repo.description}</p>
        </div>
      </div>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="inline-block">
        <img src={iconLink} alt="Icono para denotar un link"  />
      </a>
    </li>
  )
  
}