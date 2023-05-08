import React, { useEffect, useState } from 'react';
import Explorer from './Explorer';

const Code = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://transform.dabler.app/api/test/getdbobjects?datawarehouse=SNOWFLAKE-DEV")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data)});
  }, []);

    return (
        <>         
   <div className='text-end  mx-6'> <button className="bg-green-500 text-white w-24 p-1 font-medium -top-3 relative">TEST RUN</button></div>
    <div className="h-3/6 flex gap-2">
          <div className="h-full w-1/5 bg-white m-1">
           {data && data.map((items)=>(items.schemas[0] && <Explorer key={items._id} data={items}/>))}
          </div>
          <div className="h-full w-4/5 bg-white m-1">
          </div>
        </div>
        <div className="h-2/6 bg-white m-2">
          {/* Bottom content goes here */}
        </div>  
        </>
    );
}

export default Code;
