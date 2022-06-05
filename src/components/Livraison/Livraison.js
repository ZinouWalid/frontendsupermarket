import React from "react";
import "./Livraison.css";
import { useEffect, useState } from "react";
import Header from '../Welcome/Header'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Livraison() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    window.location.reload(false);

    setOpen(false);

  };
 
  const [Wilaya, setWilaya] = useState("");
  const [Commune, setCommune] = useState({});
  const [Wilayas, setWilayas] = useState([]);
  const [Price, setPrice] = useState();
  const [Communes, setCommunes] = useState([]);


  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "post",
      url: "http://localhost:3001/wilaya/get_all_wilayas",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setWilayas(response.data.wilayas);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    var axios = require("axios");
    var data = JSON.stringify({
      wilaya: Wilaya,
    });

    var config = {
      method: "post",
      url: "http://localhost:3001/wilaya/get_communes_by_wilayas",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setCommunes(response.data.wilayas[0].cities);
        setPrice(response.data.wilayas[0].cities.price)
        console.log(response.data.wilayas[0].cities);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [Wilaya]);
 
  function UpdatePrice(){
    var axios = require('axios');
    var data = JSON.stringify({
      wilaya: Wilaya,
      commune: Commune.name,
      price: Price
    });

    var config = {
      method: 'post',
      url: 'http://localhost:3001/wilaya/modify_price',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      handleClickOpen()

    })
    .catch(function (error) {
      console.log(error);
    });

  }



  return (
    <div className="">
    <Header />
      <div className='h-screen flex justify-center items-center -mt-4'>
        <div className='flex flex-col justify-center border-slate-900 border-[2px] rounded-lg p-4'>
          <h3 className='text-3xl font-semibold my-4'>
            Modifier les prix de Livraison :
          </h3>

          <div className='m-2 flex items-center'>
            <label className='text-left mr-2'>Wilaya :</label>

            <select
              className=' flex-1 rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out'
              onChange={(e) => {
                setWilaya(e.target.value);
              }}
              value={Wilaya}
            >
            {Wilayas.map((fbb) => (
              <option value={fbb.name}>{fbb.name}</option>
            ))}
            </select>
          </div>

          <div className='m-2 flex items-center'>
            <label className='text-left mr-2'>Commune :</label>

            <select
              className=' flex-1 rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out'
              onChange={(e) => {
                setCommune(JSON.parse(e.target.value));
                setPrice(JSON.parse(e.target.value).price);
              }}
              value={JSON.stringify(Commune)}
            >
            {Communes.map((commune) => (
              <option value={JSON.stringify(commune)}>{commune.name}</option>
            ))}
            </select>
          </div>

          <div className='m-2 flex items-center'>
            <label className='text-left mr-2'>Prix :</label>
            <input
              className=' flex-1 rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out'
              type='text'
              placeholder='Prix'
              name='usrnm'
              value={Price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <button
          onClick={UpdatePrice}
            type=''
            className={
              'text-md border-blue rounded border bg-amber-500 py-2 px-4 text-white hover:bg-amber-400 focus:border-black focus:outline-none my-3'
            }
          >
            Modifier
          </button>
          <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Succes Alerte !!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Prix de Livraison mis à jour avec succès
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
        </div>
      </div>
    
    
    
      
    </div>
  );
}

export default Livraison;
