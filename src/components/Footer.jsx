import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'

const Footer = () => {
  return (
    <div className='bg-slate-900 min-h-96 mt-10 min-w-screen '>
      <footer className='px-4 divide-y dark:bg-coolGray-800 text-gray-200'>
        <div className='container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0'>
          <div className='lg:w-1/3'>
            <a
              href='/'
              className='flex justify-center space-x-3 lg:justify-start'
            >
              <div className='flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400'>
                <img
                  src='./images/Logo.jpg'
                  alt='9odyani'
                  className='rounded w-20 object-cover'
                />
              </div>
              <span className='self-center text-2xl font-semibold uppercase hover:text-amber-300'>
                9odyani
              </span>
            </a>
          </div>
          <div className='grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 md:grid-cols-4'>
            <div className='space-y-3 '>
              <h3 className='tracking-wide uppercase font-semibold '>
                Produits
              </h3>
              <ul className='space-y-1'>
                <li>
                  <a className='hover:text-amber-300'>API Public</a>
                </li>
                <li>
                  <a className='hover:text-amber-300'>Liste des produits</a>
                </li>
                <li>
                  <a className='hover:text-amber-300'>Liste des catégories</a>
                </li>
                <li>
                  <a className='hover:text-amber-300'>Chercher un produit</a>
                </li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h3 className='tracking-wide uppercase font-semibold'>Société</h3>
              <ul className='space-y-1'>
                <li>
                  <a className='hover:text-amber-300'>Confidentialité</a>
                </li>
                <li>
                  <a className='hover:text-amber-300'>
                    Conditions d&apos;utilisation
                  </a>
                </li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h3 className='uppercase font-semibold'>Développeurs</h3>
              <ul className='space-y-1'>
                <li className='flex '>
                  <a
                    href='https://www.linkedin.com/in/zineddine-benkhaled-b9b1a8195/'
                    title='Zineddine Benkhaled'
                    className='hover:text-amber-300'
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href='https://github.com/ZineddineBk09'
                    title='Zineddine Benkhaled'
                    className='hover:text-amber-300 ml-2'
                  >
                    <GitHubIcon />
                  </a>
                </li>
                <li className='h-[1px] bg-white w-2/6 '></li>
                <li className='flex '>
                  <a
                    href='https://www.linkedin.com/in/walid-chebbab-4852a1201/'
                    title='Walid Chebbab'
                    className='hover:text-amber-300'
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href='https://github.com/walidchb'
                    title='Walid Chebbab'
                    className='hover:text-amber-300 ml-2'
                  >
                    <GitHubIcon />
                  </a>
                </li>
              </ul>
            </div>
            <div className='space-y-3'>
              <div className='uppercase font-semibold  '>Retrouve-nous sur</div>
              <div className='flex justify-start space-x-3'>
                <a href='#' className='flex items-center hover:text-amber-300'>
                  <FacebookIcon />
                </a>
                <a href='#' className=' flex items-center hover:text-amber-300'>
                  <TwitterIcon />
                </a>
                <a href='#' className=' flex items-center hover:text-amber-300'>
                  <InstagramIcon />
                </a>
              </div>
            </div>
            <div className='space-y-3'>
              <h3 className='tracking-wide uppercase font-semibold'>
                commandes
              </h3>
              <ul className='space-y-1'>
                <li>
                  <a
                    href='https://zino-products-api.herokuapp.com/categories'
                    className='hover:text-amber-300'
                  >
                    API Public
                  </a>
                </li>
                <li>
                  <a href='/aide' className='hover:text-amber-300'>
                    Annuler une commande
                  </a>
                </li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h3 className='tracking-wide uppercase font-semibold'>
                livraison
              </h3>
              <ul className='space-y-1'>
                <li>
                  <a href='/aide' className='hover:text-amber-300'>
                    Livrer une commande
                  </a>
                </li>
                <li>
                  <a href='/aide' className='hover:text-amber-300'>
                    Compte livreur
                  </a>
                </li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h3 className='tracking-wide uppercase font-semibold'>
                mode de paiement
              </h3>
              <ul className='space-y-1'>
                <li>
                  <a
                    href='/aide'
                    className='hover:text-amber-300 flex itemd-center'
                  >
                    <p className='mr-2'>Paiement à la livraison</p>
                    <img
                      src='https://cdn2.iconfinder.com/data/icons/delivery-and-logistic/64/Cash_on_Delivery-send-delivery-give_money-4-512.png'
                      className='rounded bg-white hover:bg-amber-300 w-5 h-5 object-cover'
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='py-6  text-center '>
          <p className='hover:text-amber-300 hover:cursor-pointer py-4'>
            © 2022 Copyrights <b>9odyani</b>. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
