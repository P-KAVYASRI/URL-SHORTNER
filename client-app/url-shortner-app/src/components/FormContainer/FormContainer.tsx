import * as React from 'react';

interface IFormContainerProps {}

const FormContainer: React.FunctionComponent<IFormContainerProps> = () => {
  return (
    <div className="container mx-auto p-2">
      
      <div className="bg-banner my-8 rounded-xl bg-cover h-64 flex flex-col justify-center items-center">
        <div className="w-full h-full rounded-xl p-20 backdrop-brightness-50">

        <h2 className="text-white text-4xl pb-4 font-bold">
          URL Shortener
        </h2>

        <p className="text-white text-xl font-extralight">
          Paste your untidy link to shorten it!
        </p>
        <p className="text-white text-center pb-4 text-sm font-thin">
          free tool to shorten a URL or reduce link, Use our URL shortner to create a shortened & neat link!
        </p>
        <form>
            <div className="flex">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-800">
                        urlshortner.link /
                    </div>
                    <input type="text" placeholder="add your link" required className="block w-full p-4 ps-32 text-sm text-gray-900 border-gray-300 rounded-lg bg-white focus: ring-blue-500 focus:border-blue-500"/>
                    <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-lg border-blue-700 focus:ring-4 focus:outline-nonefocus:ring-blue-300">
                        Shorten URL
                    </button>
                </div>
            </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default FormContainer;