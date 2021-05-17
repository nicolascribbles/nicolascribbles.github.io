import React, {useState, useEffect} from 'react';
import {convertFromRaw} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
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
      
      <div key={index} className="flex flex-col overflow-hidden bg-gradient-to-br to-cashmere dark:to-purple-400 from-cashmere-700 shadow-xl dark:text-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
        <div className="flex flex-col md:flex-row">
          <div className="h-64 w-auto md:w-1/2">
            <img className="inset-0 h-full w-full object-cover object-center" src={post.img} />
          </div>
          <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
            <h3 class="font-semibold text-lg leading-tight truncate">{post.title}</h3>
            <div className="text-clamp" dangerouslySetInnerHTML={{__html: stateToHTML(convertFromRaw(JSON.parse(post.body)))}} />
            <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
              Nicola Reyes
            </p>
          </div>
        </div>
      
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
              {displayBlogPost(posts)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}