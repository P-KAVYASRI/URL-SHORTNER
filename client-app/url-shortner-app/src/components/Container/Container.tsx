import * as React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import type { UrlData } from '../../interface/UrlData';
import axios from 'axios';
import { serverUrl } from '../../helpers/Constants';
import DataTable from '../DataTable/DataTable';

interface IContainerProps {
}

const Container: React.FunctionComponent<IContainerProps> = () => {
  const [data, setData] = React.useState<UrlData[]>([]);
  const [reload, setReload] = React.useState(false);
  const updateReloadState = ():void => {
    setReload(true)
  };

  const fetchTableData = async () => {
    try {
     const response = await axios.get(`${serverUrl}/shorturl`);
      console.log("the response from server is :", response);
      setData(response.data);
      setReload(false)
      console.log("Data : ", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    fetchTableData();
  }, [reload]);

  return (<>
  <FormContainer updateReloadState ={updateReloadState}/>
  <DataTable updateReloadState ={updateReloadState} data={data} />
  </>
  );
};

export default Container;
