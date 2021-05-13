import React from 'react';
export default function About(){
  return(
    <div className="container max-w-full md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-8 h-v-100">
      
      <div className="x-20 max-w-100 lg:mx-auto px-5 py-10 rounded-xl text-center bg-gray dark:bg-merlin dark:text-pampas shadow-xl lg:flex justify-center overflow-y-auto">
        <iframe src="https://resume.io/r/KsCU2bcPG" title="My Resume" width="100%" />
      </div>
      <div className="x-20 max-w-100 lg:mx-auto px-5 py-10 rounded-xl text-center bg-gray dark:bg-merlin dark:text-pampas shadow-xl lg:flex justify-center overflow-y-auto">
        <div className="overflow-hidden">
          <div className="border-gray-200 border-2 rounded-lg">
            <dl>
              <div className="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-lg">
                <dt className="text-sm font-medium text-gray-900 dark:text-white">
                  Stack
                </dt>
                <dd className="mt-1 text-sm text-gray-900  dark:text-gray-200 sm:mt-0 sm:col-span-2">
                  HTML, HAML, CSS, SASS, SCSS, Less, Stylus, TailwindCSS, Javascript, Typescript, Coffeescript, Node.js, NPM, CLI, Docker, AngularJS, VueJS, ReactJS, PostgresQL, Ruby, Padrino for Ruby.
                </dd>
              </div>
              <div className="px-4 py-5 bg-cashmere-300 dark:bg-gray-900 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900 dark:text-white">
                  Specialty
                </dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                  Front End Development. UI/UX principles. Integrations.
                </dd>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900 dark:text-white">
                  Other Interests
                </dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-gray-200 sm:mt-0 sm:col-span-2">
                  Acrylic Painting on canvas, Dungeons & Dragons, Hiking, DIY Projects & Carpentry, Marvel Comics, Brandon Sanderson's Cosmere.
                </dd>
              </div>
              <div className="px-4 py-5 dark:bg-gray-900 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-lg">
                <dt className="text-sm font-medium text-gray-900 dark:text-white">
                  Attachments
                </dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                  <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2 flex-1 w-0 truncate">
                          resume_back_end_developer.pdf
                        </span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                          Download
                        </a>
                      </div>
                    </li>
                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2 flex-1 w-0 truncate">
                          coverletter_back_end_developer.pdf
                        </span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                          Download
                        </a>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}