import React, { useEffect, useState } from 'react'
import  Axios  from 'axios';

function useAxios(Url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loaded, setLoad] = useState(false);

    useEffect(()=>{
        const fetchData = async() => {
            try {
                setLoad(true);
                const response = await Axios.get(Url);
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoad(false);
            }
        }
        fetchData();
    },[Url]);

  return [data,error,loaded]
}

export default useAxios;