import React from 'react';
export default (props)=>{
  const certificate = props.post;
  return(
    <div className="shadow p-4 bg-white mr-4">
      <h4 className="font-bold">{certificate.title}</h4> 
      <div className="text-center">
        <span className="inline-block p-2 mt-2 radius bg-purple-200 text-purple-700">Calificación: {certificate.score}</span>
      </div>
    </div>
  );
}