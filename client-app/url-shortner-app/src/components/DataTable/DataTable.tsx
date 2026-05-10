import * as React from 'react';

interface IDataTableProps {
}

const DataTable: React.FunctionComponent<IDataTableProps> = () => {
  return (
    <div className="container mx-auto pt-2 pb-10">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full table-fixed text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-md uppercase text-gray-50 bg-gray-700"></thead>
                <tr>
                    <th>FullUrl</th>
                </tr>
            </table>
        </div>
    </div>  
  );
};

export default DataTable;
