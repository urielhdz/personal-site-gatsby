import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import iconRight from 'heroicons-ui/icons/icon-arrow-right.svg';
import iconUniversity from '../../images/icons8-university-50.png';
export default (props)=>{
  const data = useStaticQuery(graphql`
    {
      allEducationJson {
        edges {
          node {
            slug
            title
            description
          }
        }
      }
    }  
  `);
  
  return(
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center">Conoce sobre mi formación educativa</h2>
      <div className="flex justify-center mt-8">
        {
          data.allEducationJson.edges.map((el)=>{
            const { node } = el;
            return(
              <article className="flex-1 bg-white shadow m-4 max-w-sm p-4">
                <header className="text-purple-800 flex min-height-12">
                  <img src={iconUniversity} alt="Icono representando una universidad" className="inline-block h-8 mr-2" />
                  <p className="font-bold leading-loose flex-1">{node.title}</p>
                </header>
                <div className="mt-8">
                  <p className="font-light"> {node.description}: </p>
                  <Link to={`/${node.slug}`} className="mt-4 inline-block uppercase text-pink-600 font-semibold">
                    <span className="mr-1">Ir</span>
                    <img src={iconRight} alt="Flecha apuntando hacia la derecha" style={{ height: "1em" }} className="inline" />
                  </Link>
                </div>
              </article>
            )
          })
        }
      
      </div>
    </div >
  );
}
