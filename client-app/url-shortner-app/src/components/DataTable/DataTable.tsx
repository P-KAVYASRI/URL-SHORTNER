import * as React from 'react';
import type { UrlData } from '../../interface/UrlData';
import { Link } from 'react-router-dom';
import { serverUrl } from '../../helpers/Constants';

interface IDataTableProps {
    data:UrlData[];
}

const DataTable: React.FunctionComponent<IDataTableProps> = (props) => {
    const {data} = props;
    console.log("Data in DataTable is : ", data);
    const renderTableData = () => {
        return data.map((item) => {
            return (
                <tr key={item._id} className="bg-white border-b hover:bg-gray-50">
                    <td  className="px-6 py-3 break-words">
                        <Link to ={item.fullUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            {item.fullUrl}
                        </Link>
                    </td>
                     <td className="px-6 py-3 break-words">
                        <Link to ={`${serverUrl}/shortUrl/${item.shortUrl}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            {item.shortUrl}
                        </Link>
                    </td>
                     <td  className="px-6 py-3 ">{item.clicks}</td>
                    <td className= "px-6 py-3 "></td>
                

                </tr>
            );
        });
    }; 
  return (
    <div className="container mx-auto pt-2 pb-10">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full table-fixed text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-md uppercase text-gray-50 bg-gray-700">
                <tr>
                    <th scope="col" className="px-6 py-3 w-6/12">
                        FullUrl
                    </th>
                    <th scope="col" className="px-6 py-3 w-6/12">
                        ShortUrl
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                        Clicks
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                        Action
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
