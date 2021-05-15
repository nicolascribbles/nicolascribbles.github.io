import React, { useState, useEffect } from 'react';

export default function Projects(){
  
  const [reposList, setReposList] = useState([]);
  
  useEffect(() => {
    fetch("http://api.github.com/users/nicolascribbles/repos")
      .then(res => res.json())
      .then(data => {
        setReposList(data);
        console.log(data);
    });
  }, [])
  
  return(
    <div className="flex flex-col ml-10">
      
      <div className="w-full h-96 bg-gradient-rt from-cashmere to-cashmere-700">
        <div className="title text-2xl font-mono mb-4">
          Github Projects
        </div>
      </div>
      <div className="w-full flex flex-row flex-wrap justify-start items-start">
      {
        reposList.map(item =>(
          <div className="w-1/4 max-w-md rounded-xl shadow-md overflow-hidden md:max-w-2xl mr-4 mb-4 h-48  bg-gray dark:bg-merlin dark:text-pampas ">
            <div className="md:flex">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-cashmere font-semibold">{item.language}</div>
                <a href={item.html_url} target="_blank" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{item.name}</a>
                <span className="bg-gray-500 text-xs text-white py-1 px-2 rounded">
                  {item.git_url}
                </span>
                <p className="mt-2 text-gray-500 dark:text-gray-200">{item.description}</p>
              </div>
            </div>
          </div>
        )
      )
      }
      </div>
    </div>
    
  )
}