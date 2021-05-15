import React from 'react';
export default function Home() {
  return (
    <div className="container px-8 h-v-100">
      <div className="flex flex-col-reverse xl:flex-row mb-10">
        

        <div className="my-stats x-20 w-50 px-5 py-10 mt-10 lg:mr-5 lg:mt-0 rounded-xl text-center bg-gray dark:bg-merlin dark:text-pampas shadow-xl lg:flex justify-center overflow-y-auto">
          <div className="overflow-hidden">
            <div className="border-gray-200 border-2 rounded-lg">
              <dl>
                <div className="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-t-lg">
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
                <div className="px-4 py-5 bg-cashmere-300 dark:bg-gray-900 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-b-lg">
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
                          <a href="#" className="font-medium text-cashmere hover:text-cashmere-400">
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
                          <a href="#" className="font-medium text-cashmere hover:text-cashmere-400">
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
    
      <figure className="social self-stretch x-20 lg:mx-auto pr-5 py-10 rounded-xl text-center bg-gradient-to-br to-cashmere dark:to-purple-400 from-cashmere-700 shadow-xl flex justify-between overflow-y-auto">
        <div className="h-32 md:h-56 w-1/3">
          <img className="ring-4 ring-offset-4 ring-offset-transparent ring-cashmere absolute visible dark:invisible w-32 h-32 md:w-56 md:h-56 rounded-full mx-auto z-10" src="bulma2.jpg" />
          <img className="ring-4 ring-offset-4 ring-offset-transparent ring-merlin absolute invisible dark:visible w-32 h-32 md:w-56 md:h-56 rounded-full mx-auto z-10" src="kikyo.jpg" />
        </div>
        <div className="rounded-xl rotate-12 bg-cashmere-300 rotate-3" />
        <div className="information-about-me rounded-xl bg-white dark:bg-gray dark:text-white z-20 shadow-2xl h-52 self-end p-8">
          <table className="table-auto border-none">
            <tbody>
              <tr>
                <td className="text-bold font-mono text-left">
                  My Name:
                </td>
                <td className="font-sans text-right">
                  Nicola Reyes
                </td>
              </tr>
              <tr>
                <td className="text-bold font-mono text-left">
                  My Title:
                </td>
                <td className="font-sans text-right">
                  Full-Stack Software Engineer
                </td>
              </tr>
              <tr>
                <td className="text-bold font-mono text-left">
                  My Aspirations:
                </td>
                <td className="font-sans text-right">
                  To help onboard more women to the tech industry.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </figure>
    
      </div>
      <div className="mx-20 max-w-100 lg:mx-auto px-5 py-10 rounded-xl text-center bg-gray dark:bg-merlin dark:text-pampas shadow-xl lg:flex justify-center overflow-y-auto">
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
              <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 md:gap-y-10">
                <div className="flex flex-col">
                  <dt>
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primarylight text-white mx-auto mb-8">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <p className="text-lg leading-6 font-medium text-gray-900 dark:text-white">UI/UX and Responsive</p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-900 dark:text-gray-100 px-16">
                    The user needs to be guided to have a good experience across all screens. If you don't have that, you don't have a product.
                  </dd>
                </div>

                <div className="flex flex-col">
                  <dt>
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primarylight text-white mx-auto mb-8">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <p className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Full Stack Code</p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-900 dark:text-gray-100 px-16">
                    I can't choose front-end or back-end, because both display the way my mind functions: with art and logic.
                  </dd>
                </div>

                <div className="flex flex-col">
                  <dt>
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primarylight text-white mx-auto mb-8">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Experienced</p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-900 dark:text-gray-100 px-16">
                    I am a self-starter and curious to learn more about technologies around me.
                  </dd>
                </div>

                <div className="flex flex-col">
                  <dt>
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primarylight text-white mx-auto mb-8">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                    <p className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Marketing & SEO</p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-900 dark:text-gray-100 px-16">
                    Good traffic makes a good website. I can help set you in the right direction and put your SEO on the right track. 
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}