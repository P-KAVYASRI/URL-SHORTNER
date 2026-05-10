import * as React from 'react';
import axios from 'axios';
import type { UrlData } from '../../interface/UrlData';
import { serverUrl } from '../../helpers/Constants';

interface IDataTableProps {
  data: UrlData[];
  updateReloadState:()=>void;
}

const DataTable: React.FunctionComponent<IDataTableProps> = (props) => {
  const { data,updateReloadState } = props;

  const handleCopy = async (shortUrl: string) => {
    try {

      await navigator.clipboard.writeText(
        `${serverUrl.replace('/api', '')}/${shortUrl}`
      );

      alert("Short URL Copied!");

    } catch (error) {

      console.log(error);

      alert("Failed to copy URL");
    }
  };

  const handleDelete = async (id: string) => {
    try {

      const confirmDelete = window.confirm(
        "Are you sure you want to delete this URL?"
      );

      if (!confirmDelete) return;

      await axios.delete(
        `${serverUrl}/shortUrl/${id}`
      );

      alert("URL Deleted Successfully!");

      updateReloadState();

    } catch (error) {

      console.log(error);

      alert("Failed to delete URL");
    }
  };

  const renderTableData = () => {
    return data.map((item) => {
      return (
        <tr
          key={item._id}
          className="bg-white border-b hover:bg-gray-50"
        >

          <td className="px-6 py-3 break-words">
            <a
              href={item.fullUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {item.fullUrl}
            </a>
          </td>

          <td className="px-6 py-3 break-words">
            <a
              href={`${serverUrl.replace('/api', '')}/${item.shortUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {item.shortUrl}
            </a>
          </td>

          <td className="px-6 py-3 text-center">
            {item.clicks}
          </td>

          <td className="px-6 py-3">
            <div className="flex items-center justify-center gap-3">

              <button
                onClick={() => handleCopy(item.shortUrl)}
                className="text-blue-700 hover:text-blue-900 cursor-pointer"
                title="Copy Short URL"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                  />
                </svg>
              </button>

              <button
                onClick={() => handleDelete(item._id)}
                className="text-red-700 hover:text-red-900 cursor-pointer"
                title="Delete URL"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>

            </div>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="container mx-auto pt-2 pb-10">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

        <table className="w-full table-fixed text-sm text-left text-gray-500">

          <thead className="text-md uppercase text-gray-50 bg-gray-700">
            <tr>

              <th className="px-6 py-3 w-5/12">
                Full URL
              </th>

              <th className="px-6 py-3 w-4/12">
                Short URL
              </th>

              <th className="px-6 py-3 text-center">
                Clicks
              </th>

              <th className="px-6 py-3 text-center">
                Actions
              </th>

            </tr>
          </thead>

          <tbody>
            {renderTableData()}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default DataTable;