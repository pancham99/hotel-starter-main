import React, { createContext, useEffect, useState } from 'react';

// data
import { roomData } from "../data"

// create context
export const RoomContext = createContext()



const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [total, setTotal] = useState(0)
  const [adults, setAdults] = useState("1 Adults")
  const [kids, setKids] = useState("0 kids")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]))
  })


  const handleClick = (e) => {
    e.preventDefault()
    setLoading(true);
    // filter room based on total
    const rewRooms = roomData.filter(room => {
      return total <= room.maxPerson
    })
    setTimeout(() => {
      setRooms(rewRooms);
      setLoading(false);
    }, 3000);


  }

  console.log(rooms)


  return <RoomContext.Provider value={{ rooms, adults, setAdults, kids, setKids, handleClick, loading }}>
    {children}
  </RoomContext.Provider>
};

export default RoomProvider;
