import React, { useState } from 'react';

import ModalToUpload from './ModalToUpload';
import PartsInfo from './PartsInfo';


const AddParts = () => {
 const [load, setLoad]= useState(false);
    return (
        <div>
           <div  className='py-2 flex justify-end mr-5'>
           <ModalToUpload load={load} setLoad={setLoad}></ModalToUpload>
           </div>
          <div>
          <PartsInfo load={load}></PartsInfo>
          </div>
        </div>
    );
};

export default AddParts;