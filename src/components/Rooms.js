import React, { useContext } from 'react';
//context
import { RoomContext } from '../context/RoomContext';
//components
import Room from "../components/Room"
// loader
import { SpinnerDotted } from "spinners-react"
import HeroSlider from './HeroSlider';

const Rooms = () => {
  const { rooms, loading } = useContext(RoomContext)
  // console.log(rooms)
  return <section className=' py-24'>
    
    {/* overlay spinners */}

    {loading && (
      <div className='h-screen fixed bottom-0 top-0 bg-black/90 w-full z-50 flex justify-center items-center'>
        <SpinnerDotted color='white' />
      </div>
    )}

    <div className='container mx-auto lg:px-0'>
   
      <div className='text-center'>
        <div className='font-tertiary text-[15px] tracking-[6px]'>Hotel & Spa Adina</div>
        <h2 className='font-primary text-[45px] mb-4'>Room & Suites</h2>
      </div>
      {/* grid */}
      <div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0'>
        {rooms.map((room) => {
          // console.log(room)
          return (<>
            <Room room={room} key={room.id} />
          </>)
        })}
      </div>
    </div>
  </section>;
};

export default Rooms;
