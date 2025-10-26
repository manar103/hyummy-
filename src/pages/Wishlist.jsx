import React from 'react'
import { useWishlist } from '../hooks/useWishlist'
export default function Wishlist(){
    const { items, remove, clear } = useWishlist()
    
  return (
    <div className="container py-5">
      <h2>Wishlist</h2>
      {items.length===0 ? (
        <p className="text-muted">Your wishlist is empty.</p>
      ) : (
        <>
          <div className="row g-3">
            {items.map(it => (
              <div key={it.id} className="col-md-4">
                <div className="card">
                  <img src={it.image} className="card-img-top" style={{height:160, objectFit:'cover'}} alt={it.name} />
                  <div className="card-body">
                    <h5>{it.name}</h5>
                    <p className="mb-1 small text-muted">{it.country}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="fw-bold">{it.rating} ⭐ </div>
                      <button className="btn btn-sm btn-outline-danger" onClick={() => remove(it.id)}>Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button className="btn btn-secondary" onClick={clear}>Clear Wishlist</button>
          </div>
        </>
      )}
    </div>
  )
}
