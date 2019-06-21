import React from 'react';
import { graphql, Link } from 'gatsby';
import EdNavigation from '../components/education/nav'
export default (props)=>{
  const data = props.data.educationJson;
  return(
    <div>
      <header className="pt-12 pb-12 border-purple-500 border-solid border-t-8 text-left">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="uppercase underline text-pink-500">Regresar al inicio</Link>
          <h2 className="capitalize text-6xl font-bold">{data.title}</h2>
          <p>{data.description}</p>
        </div>
      </header>
      
      <ul className="max-w-4xl mx-auto pb-8">
        {
          data.items.map((item,index) => (
            <li className="shadow bg-white  mt-4 flex" key={index}>
              <p style={{ writingMode: "vertical-rl", textOrientation:"upright" }}  className="text-center text-xs p-2 inline-block bg-blue-200 text-purple-700">{data.slug}</p>
              <div className="flex items-center flex-1 p-8">
                <div className="flex-1">
                  <h3 className="font-bold text-2xl">{item.name}</h3>
                  {
                    item.degree && <span className="inline-block p-2 radius bg-purple-100 text-purple-700">{item.degree}</span>
                  }
                  
                  {
                    item.url && <a href={item.url} class="my-btn mt-4" target="_blank" rel="noopener noreferrer"> Ver más </a>
                  }
                </div>
                <div className="inline-block"> 
                  <span className="inline-block p-2 text-2xl radius bg-green-100 text-green-700">{item.score}</span>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
      <div className="mt-24 pb-24">
        <EdNavigation />
      </div>
    </div>
  )
};

export const query = graphql`
  query($slug :String){
    educationJson(slug: { eq: $slug }) {
      slug
      description
      title
      items {
        name
        degree
        score
        url
      }
    }
  }

`; 