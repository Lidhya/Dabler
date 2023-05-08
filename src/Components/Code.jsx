import React from 'react';

const Code = () => {
    return (
        <>         
    <div className='text-end -top-3 relative mx-7'><button className="bg-green-500 text-white w-24 p-1 font-medium">TEST RUN</button></div>
    <div className="h-3/6 flex gap-2">
          <div className="h-full w-1/5 bg-white">
          </div>
          <div className="h-full w-4/5 bg-white">
          </div>
        </div>
        <div className="h-2/6 bg-white mt-2">
          {/* Bottom content goes here */}
        </div>  
        </>
    );
}

export default Code;
