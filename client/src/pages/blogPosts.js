import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    axios.get('/api/blogs')
      .then((response) =>{
        const data = response.data;
        setPosts(data);
        console.log('Your data has arrived')
      })
      .catch(() => {
        alert('Your data failed');
      });
  }, [])
  
  const displayBlogPost = (posts) => {
    if (posts.length === 0) return null;
    
    return posts.map((post, index) => (
      <div key={index}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
  }
  
  return(
      <div>
        <div className="blog">
          {displayBlogPost(posts)}
        </div>
        
        <div className="lg:flex md:flex xl:justify-around sm:flex flex-wrap md:justify-around sm:justify-around lg:justify-around">
            <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
                <div className="shadow h-64 rounded z-10">
                    <img src="https://cdn.tuk.dev/assets/photo-1573451444472-7b0b275ab824.jfif" alt="" className="h-full w-full object-cover overflow-hidden rounded" />
                </div>
                <div className="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded z-20 relative">
                    <p className="uppercase text-sm text-indigo-700 text-center pb-3">VEHICLE</p>
                    <p className="text-lg text-gray-800 text-center pb-3">The way I drive and handle a car, is an expression of my inner feeling.</p>
                    <p className="text-sm text-gray-800 text-center">
                        May 13, 2019 by <a href="javascript:void(0)"><span className="text-indigo-700 cursor-pointer">Silene Cox</span></a>
                    </p>
                </div>
            </div>
            <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
                <div className="shadow h-64 rounded">
                    <img src="https://cdn.tuk.dev/assets/photo-1544476915-ed1370594142.jfif" alt="" className="h-full w-full object-cover overflow-hidden rounded" />
                </div>
                <div className="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded z-20 relative">
                    <p className="uppercase text-sm text-indigo-700 text-center pb-3">Work</p>
                    <p className="text-lg text-gray-800 text-center pb-3">I'm a greater believer in luck, and I find the harder I work the more I have of it.</p>
                    <p className="text-sm text-gray-800 text-center">
                        May 13, 2019 by <a href="javascript:void(0)"><span className="text-indigo-700 cursor-pointer">Sansa Rollins</span></a>
                    </p>
                </div>
            </div>
            <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
                <div className="shadow h-64 rounded">
                    <img src="https://cdn.tuk.dev/assets/photo-1462331940025-496dfbfc7564.jfif" alt="" className="h-full w-full object-cover overflow-hidden rounded" />
                </div>
                <div className="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded z-20 relative">
                    <p className="uppercase text-sm text-indigo-700 text-center pb-3">Productivity</p>
                    <p className="text-lg text-gray-800 text-center pb-3">Productivity is being able to do things that you were never able to do before.</p>
                    <p className="text-sm text-gray-800 text-center">
                        May 13, 2019 by <a href="javascript:void(0)"><span className="text-indigo-700 cursor-pointer">Ashley Wilson</span></a>
                    </p>
                </div>
            </div>
        </div>
    </div>
      </div>
  )
}