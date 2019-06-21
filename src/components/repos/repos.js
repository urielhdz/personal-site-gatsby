import React, { useEffect, useState } from 'react';
import Repo from './repo';
export default ()=>{
  const [repos, setRepos] = useState([]);
  const [reposCount, setReposCount] = useState(0);
  useEffect(()=>{

    const data = sessionStorage.getItem("repos");
    

    if (data) {
      let myRepos = JSON.parse(data);
      setReposCount(myRepos.length);
      return setRepos(myRepos.slice(1, 13));
    }

    const fetchReposFromGitHub = async ()=>{
      const response = await fetch("https://api.github.com/users/urielhdz/repos");
      let myRepos = (await response.json());
      console.log(myRepos.length);
      setReposCount(myRepos.length);
      sessionStorage.setItem("repos", JSON.stringify(myRepos));
      myRepos = myRepos.slice(1, 13);
      
      

      setRepos(myRepos);
    }

    fetchReposFromGitHub();
  },[])
  
  return(
    <div className="max-w-4xl mx-auto">
      <header className="text-center">
        <h2 className="text-3xl font-bold ">Mi trabajo en Open Source</h2>
        <p>Colaboración y contribución de código.</p>
      </header>
      <ul className="repos-list">
        {
          repos.map(repo => <Repo repo={repo} key={repo.id} />)
        }
      </ul>
      <div className="mt-8 text-center">
        <a href="http://github.com/urielhdz" className="my-btn" target="_blank" rel="noopener noreferrer">
          Ver más en GitHub ({reposCount})
        </a>
      </div> 
    </div>
  )
}