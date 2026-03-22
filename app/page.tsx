import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-slate-900 border-2 border-slate-900">
                L
              </div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight">
                Letshego Ghana
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-slate-600 hover:text-yellow-500 font-medium transition-colors">Home</a>
              <a href="#" className="text-slate-600 hover:text-yellow-500 font-medium transition-colors">Our Loans</a>
              <a href="#" className="text-slate-600 hover:text-yellow-500 font-medium transition-colors">Savings</a>
              <a href="#" className="text-slate-600 hover:text-yellow-500 font-medium transition-colors">About Us</a>
              <a href="#" className="text-slate-600 hover:text-yellow-500 font-medium transition-colors">Contact</a>
            </nav>
            <div className="flex items-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-6 py-2.5 rounded-full font-semibold transition-colors shadow-sm">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow pt-20">
        <section className="relative bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-slate-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-20 px-4 sm:px-6 lg:px-8">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Improving Lives</span>{" "}
                  <span className="block text-yellow-500 xl:inline">Through Finance</span>
                </h1>
                <p className="mt-3 text-base text-slate-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Letshego Savings and Loans Ghana offers tailored financial solutions to meet your everyday needs. Simple, quick, and inclusive banking for everyone.
                </p>
                <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-slate-900 bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg transition-transform hover:scale-105 duration-200">
                      Get a Loan
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-slate-300 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 md:py-4 md:text-lg transition-colors">
                      Open an Account
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative background shape */}
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-yellow-400/10 hidden lg:block rounded-l-full">
             <div className="w-full h-full flex items-center justify-center">
                <div className="w-96 h-96 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
             </div>
          </div>
        </section>

        {/* Features / Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Our Services
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-slate-600 mx-auto">
                Comprehensive financial products designed with you in mind.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="pt-6">
                <div className="flow-root bg-slate-50 rounded-lg px-6 pb-8 h-full shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-yellow-400 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-slate-900 tracking-tight">Personal Loans</h3>
                    <p className="mt-3 text-base text-slate-600">
                      Quick approval and competitive interest rates for your personal needs, education, or emergencies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="pt-6">
                <div className="flow-root bg-slate-50 rounded-lg px-6 pb-8 h-full shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-yellow-400 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-slate-900 tracking-tight">SME & Micro Finance</h3>
                    <p className="mt-3 text-base text-slate-600">
                      Grow your business with customized financing solutions built specifically for small and medium enterprises.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="pt-6">
                <div className="flow-root bg-slate-50 rounded-lg px-6 pb-8 h-full shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-yellow-400 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-slate-900 tracking-tight">Savings Accounts</h3>
                    <p className="mt-3 text-base text-slate-600">
                      Secure your future with high-yield savings plans that give you better returns safely.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-slate-900">
                L
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Letshego Ghana
              </span>
            </div>
            <p className="text-base text-slate-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} Letshego Savings and Loans Ghana. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-yellow-400">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-yellow-400">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
