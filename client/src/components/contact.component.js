import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="container mx-auto my-24 px-5">
        <div className="card container-sm flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-24 mx-72 rounded-lg shadow-lg sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">
                Contact Me
              </h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input id="name" name="name" type="text" autoComplete="name" required className="input first" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Your Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" required className="input" placeholder="Your Email" />
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">Subject Line</label>
                  <input ihtmlF="subject" name="subject" type="text" required className="input" placeholder="Subject Line" />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Your Message</label>
                  <textarea id="message" name="message" required className="input resize last" placeholder="Your Message..."></textarea>
                </div>
              </div>

              <div>
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg className="h-5 w-5 text-blue-500 group-hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;