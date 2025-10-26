import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuCard({ item, onAdd }){
  return (
    <div className="card card-food h-100">
      <img src={item.image} alt={item.name} className="food-img w-100" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.name}</h5>
        <p className="text-muted small mb-2">{item.country}</p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <Link to={`/menu/${item.id}`} className="btn btn-link p-0">Details</Link>
          <div className="text-end">
            <div className="fw-bold">{item.rating}  ⭐</div>
            <button className="btn btn-sm btn-outline-primary mt-2" onClick={() => onAdd(item)}>Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}
