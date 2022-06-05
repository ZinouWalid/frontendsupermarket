import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Welcome/Header'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function AddproductPage() {
  const [id, setid] = useState()
  const [name, setname] = useState('')
  const [price, setprice] = useState()
  const [Promontion, setPromontion] = useState(0)

  const [rating, setrating] = useState()
  const [category, setcategory] = useState()
  const [img, setimg] = useState()
  const [tags, settags] = useState()
 
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    window.history.back()

    setOpen(false);

  };

  
  function addproduct() {
    var axios = require('axios')
    var data = JSON.stringify({
      name: name,
      price: price,
      promotion: Promontion,
      rating: rating,
      category: category,
      img: img,
      tags: tags,
    })

    var config = {
      method: 'post',
      url: 'http://localhost:3001/product/add_product',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data))
        handleClickOpen()
      })
      .catch(function (error) {
        console.log(error)
      })
      
  }
  return (
    <div className=''>
      <Header />
      <div className='h-screen flex justify-center items-center -mt-4'>
        <div className='flex flex-col justify-center border-slate-900 border-[2px] rounded-lg p-4'>
          <h3 className='text-3xl font-semibold my-4'>
            Ajouter un nouveau produit :
          </h3>

          <div className='m-2 flex items-center'>
            <label className='text-left mr-2'>Nom :</label>
            <input
              className=' flex-1 rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out'
              type='text'
              placeholder='nom'
              name='usrnm'
              value={name}
              onChange={(e) => {
                setname(e.target.value)
              }}
            />
          </div>
          <div className='m-2 flex items-center'>
            <label className='text-left mr-2'>Prix :</label>
            <input
              className=' flex-1 rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out'
              type='text'
              placeholder='prix'
              name='usrnm'
              value={price}
              onChange={(e) => {
                setprice(e.target.value)
              }}
            />
          </div>
          <div className='m-2 flex items-center'>
            <label className='text-left mr-2'>Remise :</label>
            <input
              className=' flex-1 rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out'
              type='text'
              placeholder='remise'
              name='usrnm'
              value={Promontion + '%'}
              onChange={(e) => {
                setPromontion(e.target.value)
              }}
            />
          </div>

          <div className='m-2 flex items-center'>
            <label className='text-left mr-2'>Évaluation :</label>
            <input
              className=' flex-1 rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out'
              type='text'
              placeholder='évaluation'
              name='usrnm'
              value={rating}
              onChange={(e) => {
                setrating(e.target.value)
              }}
            />
          </div>
          <div className='m-2 flex items-center'>
            <label className='text-left mr-2'>Catégorie :</label>

            <select
              className=' flex-1 rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out'
              value={category}
              onChange={(e) => {
                setcategory(e.target.value)
              }}
            >
              <option value='epicerie-bonbons-chocolat'>
                epicerie-bonbons-chocolat
              </option>
              <option value='epicerie-vaisselle'>epicerie-vaisselle</option>
              <option value='epicerie-alimentaire'>epicerie-alimentaire</option>
              <option value='boissons'>boissons</option>
              <option value='miels-confitures-pates-a-tartiner'>
                miels-confitures-pates-a-tartiner
              </option>
              <option value='cosmetique'>cosmetique</option>
              <option value='nettoyage'>nettoyage</option>
            </select>
          </div>
          <div className='m-2 flex items-center'>
            <label className='text-left mr-2'>Image :</label>
            <input
              className=' flex-1 rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out'
              type='text'
              placeholder='Image URL'
              name='usrnm'
              value={img}
              onChange={(e) => {
                setimg(e.target.value)
              }}
            />
          </div>
          <button
            type=''
            className={
              'text-md border-blue rounded border bg-amber-500 py-2 px-4 text-white hover:bg-amber-400 focus:border-black focus:outline-none my-3'
            }
            onClick={addproduct}
          >
            Ajouter
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
          Votre Produit a été bien Ajouté.
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
  )
}

export default AddproductPage
