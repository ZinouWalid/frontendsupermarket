import React from "react";
import Header from '../Welcome/Header'
import AddIcon from '@mui/icons-material/Add'


function DeliveryMan() {
  return <div>
  <div>
  <Header />

    
      <div className='flex items-center justify-between'>
        <h1 className='text-5xl font-semibold ml-4'>Livreurs : </h1>
        <a
          href='/DeliveryMan/adddeliveryman'
          className='bg-green-500 p-2 rounded text-white text-xl font-medium hover:scale-105 hover:bg-green-600 transition duration-300 mr-6 my-6'
        >
          <AddIcon /> Ajouter un noveau Livreur
        </a>
      </div>
      <div className='ProductDisplay'>
       
      </div>
    </div>
  </div>;
}

export default DeliveryMan;
