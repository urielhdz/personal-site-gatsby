import React from "react";
import illustration from "../images/web-developer.svg";
import Form from '../components/contact-form';
import Repos from "../components/repos/repos";
import PostsData from "../components/posts/posts_data";
import EducationNav from '../components/education/nav';
import CoursesData from "../components/courses/courses_data";
export default () => (
  <div>
    <header className="bg-gray-300" >
      <div className="container max-w-4xl mx-auto p-12 ">
        <div className="flex justify-center items-center">
          <div className="flex-1">
            <h1 className="text-purple-700 font-bold text-6xl">¡Hola! Soy Uriel</h1>
            <p className="text-xl font-light">Creo aplicaciones web y enseño programación.</p>  
          </div>      
          <img src={illustration} style={{height:"300px"}} alt="Gráfico de una persona usando una computadora para desarrollar páginas web" />
        </div>
        <div style={{ height: "15px" }}>
          <Form />
        </div>      
      </div>
    </header>
    <div className="mt-24">
      <EducationNav />
    </div>
    <div className="mt-24">
      <Repos />
    </div>
    <div className="mt-24">
      <PostsData/>
    </div>
    <div className="mt-24">
      <CoursesData />
    </div>
  </div>
)
