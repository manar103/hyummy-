import React, { useEffect, useState } from 'react'
import { fetchMenu } from '../api/menu'
import MenuCard from '../components/MenuCard'
import Spinner from '../components/Spinner'
import { useWishlist } from '../hooks/useWishlist'


export default function Menu(){
  const [menu, setMenu] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { add } = useWishlist()


  useEffect(() => {
    let mounted = true
    fetchMenu().then(data => {
      if(mounted){
        setMenu(data)
        setLoading(false)
      }
    }).catch(err => {
      if(mounted){
        setError(err.message)
        setLoading(false)
      }
    })
    return () => { mounted = false }
  }, [])

  if(loading) return <Spinner />
  if(error) return <div className="container py-5">Error: {error}</div>

  return (
    <div className="container py-5">
      <h2>Menu</h2>
      <div className="row g-4 mt-3">
        {menu.map(item => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={item.id}>
            <MenuCard item={item} onAdd={add} />
          </div>
        ))}
      </div>
    </div>
  )
}
