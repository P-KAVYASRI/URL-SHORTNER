import * as React from 'react';

export interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (

    <div className="bg-slate-950 shadow-xl sticky top-0 z-50">

      <div className="container mx-auto px-6">

        <nav className="flex items-center justify-between py-5">

          <div className="flex items-center gap-3">

            <div className="bg-blue-600 p-2 rounded-xl shadow-lg">

             <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="w-6 h-6 text-white"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 0c2.485 2.485 3.75 6.065 3.75 9.75S14.485 19.265 12 21.75m0-19.5c-2.485 2.485-3.75 6.065-3.75 9.75S9.515 19.265 12 21.75"
  />
</svg>

            </div>

            <div>

              <h1 className="text-2xl font-bold tracking-wide text-white">
                URLShortner
              </h1>

              <p className="text-gray-400 text-xs">
                Fast & Secure Link Shortener
              </p>

            </div>
          </div>

  

        </nav>
      </div>
    </div>
  );
};

export default Header;