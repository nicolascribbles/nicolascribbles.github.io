import React from 'react';
export default function Home() {
  return (
    <div className="container max-w-6xl mx-8 h-v-100">
      <div className="mx-20 max-w-100 lg:mx-auto px-5 py-10 rounded-xl text-center bg-indigo-50 dark:bg-gray-700 dark:shadow-xl lg:flex justify-center overflow-y-auto">
        <div className="dark:bg-gray-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-primarylight font-semibold tracking-wide uppercase">Nicola Scribbles</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
                Full Stack Software Engineer
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-100 lg:mx-auto">
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
                  <dd className="mt-2 text-base text-gray-500 dark:text-gray-100 px-16">
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
                  <dd className="mt-2 text-base text-gray-500 dark:text-gray-100 px-16">
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
                  <dd className="mt-2 text-base text-gray-500 dark:text-gray-100 px-16">
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
                  <dd className="mt-2 text-base text-gray-500 dark:text-gray-100 px-16">
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