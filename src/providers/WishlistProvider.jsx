import React, { useState, useEffect } from 'react'
import { WishlistContext } from '../contexts/WishlistContext'

export default function WishlistProvider({ children }){
  const [items, setItems] = useState(() => {
    try{ return JSON.parse(localStorage.getItem('hyummy_wishlist')) || [] }catch{ return [] }
  })

  useEffect(() => {
    try{ localStorage.setItem('hyummy_wishlist', JSON.stringify(items)) }catch{}
  }, [items])

  function add(item){
    setItems(prev => {
      if(prev.find(i=>i.id === item.id)) return prev
      return [...prev, item]
    })
  }

  function remove(id){ setItems(prev => prev.filter(i => i.id !== id)) }
  function clear(){ setItems([]) }

  return (
    <WishlistContext.Provider value={{ items, add, remove, clear }}>
      {children}
    </WishlistContext.Provider>
  )
}
