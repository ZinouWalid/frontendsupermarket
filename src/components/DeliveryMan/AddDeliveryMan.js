import React, { useState } from 'react'
import Footer from '../Footer'
import Header from '../Welcome/Header'

function AddDeliveryMan() {
  return (
    <div className='w-screen'>
      <Header />
      <div className="adddeliverydiv">
          
      
      <div className='mt-8 border-slate-700 m-auto  rounded-lg border bg-white px-1 w-3/6'>
        <div className=' m-6'>
          <div className='mt-3 flex items-center justify-center'>
            <h1 className='mt-4 mb-2 text-2xl font-medium'>
              Créez votre compte
            </h1>
          </div>
          <form action='/rider/auth/signup' >
            {/* ----------------Nom------------- */}
            <label className='text-left'>
              Quel est votre nom? <i className='text-red-500'>*</i>
            </label>
            <input
              name='name'
              type='text'
              
              placeholder='nom'
              className={
                ' mb-4 w-full rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out'
              }
              required
            />

            {/* ----------------E-mail------------- */}
            <label className='text-left'>
              Quel est votre e-mail? <i className='text-red-500'>*</i>
            </label>
            <input
              name='email'
              type='email'
              
              placeholder='E-mail'
              className={
                ' mb-4 w-full rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out'
              }
              required
            />

            {/* ----------------Num téléphone------------- */}
            <label>
              Quel est votre numéro de téléphone?{' '}
              <i className='text-red-500'>*</i>
            </label>
            <div className='flex'>
              <p
                className={
                  ' mb-4 rounded-md border p-2 text-sm outline-none'
                }
              >
                +213
              </p>
              <input
                name='phoneNumber'
                type='text'
                
                placeholder='0000 000 000'
                className={
                  ' mb-4 w-full rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out'
                }
                reaquired
              />
            </div>

            {/* ----------------Moto------------- */}
            <label className='text-left'>
              Avez-vous une moto? <i className='text-red-500'>*</i>
            </label>
            <select
              name='haveMoto'
              
              className={
                ' mb-4 w-full rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out cursor-pointer'
              }
              required
            >
              <option value={null}>Sélectionner </option>
              <option value={true}>Oui </option>
              <option value={false}>Non </option>
            </select>

            {/* ----------------Permis------------- */}
            <label className='text-left'>
              Avez-vous le permis de catégorie A?{' '}
              <i className='text-red-500'>*</i>
            </label>
            <select
              name='havePermis'
              
              className={
                ' mb-4 w-full rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out cursor-pointer'
              }
              required
            >
              <option value={null}>Sélectionner </option>
              <option value={true}>Oui </option>
              <option value={false}>Non </option>
            </select>

            {/* ----------------Service militaire------------- */}
            <label className='text-left'>
              Etes-vous dégagés du service militaire?
              <i className='text-red-500'>*</i>
            </label>
            <select
              name='militaryFree'
             
              className={
                ' mb-4 w-full rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out cursor-pointer'
              }
              required
            >
              <option value={null}>Sélectionner </option>
              <option value={true}>Oui </option>
              <option value={false}>Non </option>
            </select>

            {/* ------------Region------------- */}
            <label className='text-left'>
              dans quelle région veux-tu travailler?{' '}
              <i className='text-red-500'>*</i>
            </label>
            <select
              name='region'
              
              className={
                ' mb-4 w-full rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out'
              }
              required
            >
              <option value={null}>Sélectionner </option>
              
            </select>

            {/* ----------------Date de debut------------- */}
            <label className='text-left'>
              A partir de quand pouvez vous commencer?
              <i className='text-red-500'>*</i>
            </label>
            <input
              name='startingDate'
              type='date'
              
              className={
                ' mb-4 w-full rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out cursor-pointer'
              }
              required
            />

            {/* ----------------Mot de passe------------- */}
            <label className='text-left'>
              Créez votre mot de passe
              <i className='text-red-500'>*</i>
            </label>
            <input
              name='password'
              type='password'
              
              placeholder='mot de passe'
              className={
                ' mb-4 w-full rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out'
              }
              minLength='6'
              required
            />

            {/* ----------------Confirmer mot de passe------------- */}
            <label className='text-left'>
              Confirmer votre mot de passe <i className='text-red-500'>*</i>
            </label>
            <input
              name='passwordConfirm'
              type='password'
             
              placeholder='mot de passse'
              className={
                ' mb-4 w-full rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out'
              }
              required
            />
            <div className='mt-3 flex items-center justify-center'>
              <button
                className={
                  'text-md border-blue rounded border bg-amber-500 py-2 px-4 text-white hover:bg-amber-400 focus:border-black focus:outline-none'
                }
                type='submit'
              >
                S&apos;inscrire
              </button>
            </div>
          </form>
          
        </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AddDeliveryMan