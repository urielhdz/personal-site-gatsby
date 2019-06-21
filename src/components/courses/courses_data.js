import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Posts from '../posts/posts';
import Cert from './cert';
import Article from './article';
// import Posts from './posts';
export default (props) => {
  const data = useStaticQuery(graphql`{
      codigofacilitoJson{
        id
        data {
          email
          username
          certificates{
            score
            code
            title
          }
          articles{
            title
            visits
            url
          }
          finished_courses{
            title
            url
          }
          
        }
        
      }
    }`
  );
  return (
    <div>
      <div className="mt-24">
        <Posts title="Mis diplomas en CódigoFacilito" posts={data.codigofacilitoJson.data.certificates} card={Cert} link="https://codigofacilito.com/usuarios/uriel" text="Ver más en CódigoFacilito" />
      </div>

      <div className="mt-24">
        <Posts title="Mis artículos en CódigoFacilito" posts={data.codigofacilitoJson.data.articles} card={Article} link="https://codigofacilito.com/usuarios/uriel" text="Ver más en CódigoFacilito" />
      </div>
    </div>
  )
}