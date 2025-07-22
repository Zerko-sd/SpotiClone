import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <>
    <Navbar />
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>
            Featured Charts
        </h1>
        <div className='flex overflow-auto'>
            {albumsData.map((items,index) => (<AlbumItem key={index} name={items.name} desc={items.desc} id = {items.id} image={items.image}/>))}

        </div>


    </div>
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>
            Todays Biggest hits
        </h1>
        <div className='flex overflow-auto'>
            {songsData.map((item, index) => <SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>)}

        </div>


    </div>
        <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>
            Jump Back In
        </h1>
        <div className='flex overflow-auto'>
            {songsData.map((item, index) => <SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>)}

        </div>


    </div>
    </>
  )
}

export default DisplayHome