import React, { useState, useEffect } from 'react';
import Posts from './posts';
import Post from './post';
export default (props)=>{
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let myPosts = sessionStorage.getItem("posts");
    if (myPosts) return setPosts(JSON.parse(myPosts));

    const fetchMyPostsFromMedium = async () => {
      const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Uriel_Hedz");
      myPosts = (await response.json()).items.slice(0, 5);
      sessionStorage.setItem("posts", JSON.stringify(myPosts));
      setPosts(myPosts);
    };

    fetchMyPostsFromMedium();
  }, [])
  return(
    <Posts {...props} title="Mis publicaciones en Medium" posts={posts} card={Post} link="https://medium.com/@Uriel_Hedz" text="Ver más en Medium">
      <p className="text-center">Tutoriales y opinión sobre la industria de software</p>
    </Posts>
  )
}