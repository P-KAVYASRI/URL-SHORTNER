import * as React from 'react';
import axios from 'axios';
import { serverUrl } from '../../helpers/Constants';

interface IFormContainerProps {}

const FormContainer: React.FunctionComponent<IFormContainerProps> = () => {
  const [fullUrl, setFullUrl] = React.useState<string>("");
  const [shortUrl, setShortUrl] = React.useState<string>("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${serverUrl}/shorturl`,
        {
          fullUrl: fullUrl,
        }
      );

      setShortUrl(response.data.shortUrl);
      setFullUrl("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mx-auto p-2">

      <div className="bg-banner my-8 rounded-xl bg-cover h-96 flex flex-col justify-center items-center">

        <div className="w-full h-full rounded-xl p-20 backdrop-brightness-50">

          <h2 className="text-white text-4xl pb-4 font-bold text-center">
            URL Shortener
          </h2>

          <p className="text-white text-xl font-extralight text-center">
            Paste your untidy link to shorten it!
          </p>

          <p className="text-white text-center pb-4 text-sm font-thin">
            free tool to shorten a URL or reduce link,
            Use our URL shortner to create a shortened & neat link!
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div className="relative w-full">

                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-800">
                  urlshortner.link /
                </div>

                <input
                  type="text"
                  placeholder="add your link"
                  required
                  className="block w-full p-4 ps-32 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                  value={fullUrl}
                  onChange={(
                    e: React.ChangeEvent<HTMLInputElement>
                  ) => setFullUrl(e.target.value)}
                />

                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-lg border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Shorten URL
                </button>

              </div>
            </div>
          </form>

          {shortUrl && (
            <div className="text-white mt-6 text-center">
              <p className="text-lg font-semibold">
                Short URL:
              </p>

              <a
                href={shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 underline break-all"
              >
                {shortUrl}
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default FormContainer;