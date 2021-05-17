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
        console.log(posts)
      })
      .catch(() => {
        alert('Your data failed');
      });
  }, [])
  
  const consoleBlogPosts = (posts) => {
    console.log(posts)
  }
  
  const displayBlogPost = (posts) => {
    if (posts.length === 0) return null;
    
    console.log(posts)
    
    return posts.map((post, index) => (
      
      <div key={index} className="flex flex-col md:flex-row overflow-hidden bg-gray dark:bg-merlin dark:text-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
        <div className="h-64 w-auto md:w-1/2">
          <img className="inset-0 h-full w-full object-cover object-center" src={post.img} />
        </div>
        <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
          <h3 class="font-semibold text-lg leading-tight truncate">{post.title}</h3>
          <p class="mt-2">
            {post.content}
          </p>
          <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
            Nicola Reyes &bull; {post.date}
          </p>
        </div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
  }
  
  return (
    <div className="container px-7 h-v-100">
    
      <div className="max-w-100 px-5 py-10 rounded-xl text-center bg-gray dark:bg-merlin dark:text-pampas shadow-xl lg:flex justify-center overflow-y-auto">
        <div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-primarylight font-semibold tracking-wide uppercase">Nicola Scribbles</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
                Full Stack Software Engineer
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-900 dark:text-gray-100 lg:mx-auto">
                The one stop shop for all things needed to build a successful website or application. I bring a unique perspective because my brain loves to exercise hymespherical harmony.
              </p>
            </div>

            <div className="mt-10">
              {consoleBlogPosts(posts)}
              {displayBlogPost(posts)}
            </div>
          </div>
        </div>
      </div>
    
      <div className="w-full h-96 bg-gradient-rt from-cashmere to-cashmere-700">
        <div className="title text-2xl font-mono mb-4">
          Blogs
        </div>
      </div>
    
      <div className="w-full flex flex-col justify-start items-start">
        <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
          {displayBlogPost(posts)}
        </div>
      </div>

      <div className="lg:flex md:flex xl:justify-around sm:flex flex-wrap md:justify-around sm:justify-around lg:justify-around">
        <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
          <div className="shadow h-64 rounded z-10">
            <img src="https://cdn.tuk.dev/assets/photo-1573451444472-7b0b275ab824.jfif" alt="" className="h-full w-full object-cover overflow-hidden rounded" />
          </div>
          <div className="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded z-20 relative">
            <p className="uppercase text-sm text-cashmere-600 text-center pb-3">VEHICLE</p>
            <p className="text-lg text-gray-800 text-center pb-3">The way I drive and handle a car, is an expression of my inner feeling.</p>
            <p className="text-sm text-gray-800 text-center">
              May 13, 2019 by <a href="javascript:void(0)"><span className="text-cashmere-600 cursor-pointer">Silene Cox</span></a>
            </p>
          </div>
        </div>
        <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
          <div className="shadow h-64 rounded">
            <img src="https://cdn.tuk.dev/assets/photo-1544476915-ed1370594142.jfif" alt="" className="h-full w-full object-cover overflow-hidden rounded" />
          </div>
          <div className="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded z-20 relative">
            <p className="uppercase text-sm text-cashmere-600 text-center pb-3">Work</p>
            <p className="text-lg text-gray-800 text-center pb-3">I'm a greater believer in luck, and I find the harder I work the more I have of it.</p>
            <p className="text-sm text-gray-800 text-center">
              May 13, 2019 by <a href="javascript:void(0)"><span className="text-cashmere-600 cursor-pointer">Sansa Rollins</span></a>
            </p>
          </div>
        </div>
        <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
          <div className="shadow h-64 rounded">
            <img src="https://cdn.tuk.dev/assets/photo-1462331940025-496dfbfc7564.jfif" alt="" className="h-full w-full object-cover overflow-hidden rounded" />
          </div>
          <div className="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded z-20 relative">
            <p className="uppercase text-sm text-cashmere-600 text-center pb-3">Productivity</p>
            <p className="text-lg text-gray-800 text-center pb-3">Productivity is being able to do things that you were never able to do before.</p>
            <p className="text-sm text-gray-800 text-center">
                  May 13, 2019 by <a href="javascript:void(0)"><span className="text-cashmere-600 cursor-pointer">Ashley Wilson</span></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}