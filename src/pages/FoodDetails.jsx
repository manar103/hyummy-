import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFoodById } from '../api/menu'
import Spinner from '../components/Spinner'
import { useWishlist } from '../hooks/useWishlist'


export default function FoodDetails(){
  const { id } = useParams()
  const [food, setFood] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { add } = useWishlist()
  useEffect(() => {
    let mounted = true
    fetchFoodById(id).then(data => {
      if(mounted){
        setFood(data)
        setLoading(false)
      }
    }).catch(err => {
      if(mounted){
        setError(err.message)
        setLoading(false)
      }
    })
    return () => { mounted = false }
  }, [id])

  if(loading) return <Spinner />
  if(error) return <div className="container py-5">Error: {error}</div>
  if(!food) return null

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <img src={food.image} alt={food.name} className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h2>{food.name}</h2>
          <p className="text-muted">Description : {food.instructions}</p>
          <h4 className="text-success">{food.rating} ⭐ </h4>
          <p>{food.description}</p>
          <button className="btn btn-primary" onClick={() => add({ id: food.id, name: food.name, image: food.image, price: food.price, country: food.country })}>Add to Wishlist</button>
        </div>
      </div>
    </div>
  )
}
