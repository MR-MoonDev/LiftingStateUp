import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import FetchApiDesgn from './FetchApiDesgn';

const FetchApi = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((result) => result.json())
            .then((response) => {
                setData(response.slice(0, 10)); 
                // setData(response);  // Limiting to 10 items for display purposes
            });
    }, []);

    return (
       <div>
        <FetchApiDesgn data={data}/>
       </div>
    );
};

export default FetchApi;
