import React from 'react'
import { useState } from 'react';
function Popover() {

    const [isPopoverVisible, setPopoverVisible] = useState(false);

    const togglePopover = () => {
        setPopoverVisible(!isPopoverVisible);
    };

  return (
    <div>
       <div className="container ">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={togglePopover}>Show Popover</button>
            {isPopoverVisible && (
                <div className="popover">
                    <div className="popover-content">
                        <p   className="text-gray-800">This is a popover content.</p>
                        <button  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
                         onClick={togglePopover}>Close</button>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Popover
