import React from 'react'
import './Product.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Product(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [Prom, setProm] = useState(false)

  useEffect(() => {
    if (props.Prom == '0%') {
      setProm(false)
    } else {
      setProm(true)
    }
  }, [])

  function DeleteClick() {
    var axios = require('axios')
    var data = JSON.stringify({
      id: props.id,
    })

    var config = {
      method: 'post',
      url: 'http://localhost:3001/product/delete_product',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data))
      })
      .catch(function (error) {
        console.log(error)
      })
    window.location.reload(false)
  }
  return (
    <div className='flex rounded bg-white p-3 shadow-xl  md:flex-col md:justify-evenly h-full hover:scale-105 transition duration-300'>
      <div>
        <img
          className='mr-2 h-80 object-contain hover:cursor-pointer'
          src={props.img}
          alt=''
        />

        <div className='flex flex-col transition ease-in-out duration-500'>
          <p>{props.name}</p>

          {props.promotion?.split('%')[0] <= 0 ? (
            <CurrencyFormat
              renderText={(value) => (
                <span className='text-gray-700 mt-2 font-medium'>
                  {value + ' '}DA
                </span>
              )}
              decimalScale={2}
              value={props.price}
              displayType={'text'}
              thousandSeparator={true}
            />
          ) : (
            <div className='flex flex-col '>
              <CurrencyFormat
                renderText={(value) => (
                  <span className='font-medium text-gray-900 '>
                    {value + ' '}DA
                  </span>
                )}
                decimalScale={2}
                value={
                  parseInt(props.price) -
                  (parseInt(props.price) *
                    parseInt(props.promotion?.split('%')[0])) /
                    100
                }
                displayType={'text'}
                thousandSeparator={true}
              />

              <span className='flex items-center font-medium text-xs mt-2'>
                <p className='text-gray-500 line-through  '>{props.price}</p>
                <p className='bg-amber-300 rounded font-bold ml-2 py-[2px] px-[3px] text-amber-700'>
                  - {props.promotion}
                </p>
              </span>
            </div>
          )}
        </div>
      </div>

      <div className='flex flex-col w-full items-center mt-2'>
        <Link
          to={'/ModifyProduct/' + props.id}
          className='bg-sky-600 py-2 w-5/6 flex items-center justify-center text-white rounded my-1 hover:scale-105 transition duration-300 hover:cursor-pointer'
        >
          Modifier <ModeEditIcon className='mx-2'/>
        </Link>

        <a
          className='bg-red-600 py-2 w-5/6 flex items-center justify-center text-white rounded my-1 hover:scale-105 transition duration-300 hover:cursor-pointer'
          onClick={handleClickOpen} 
        >
          Supprimer <DeleteIcon className='mx-2'/>
        </a>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Alerte !!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          êtes-vous sûr de vouloir vraiment supprimer ce produit.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={DeleteClick} autoFocus>
            Suprimer
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    </div>
  )
}

export default Product
