import React from 'react'

export default function Home(){
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="display-5">Welcome to Hyummy</h1>
          <p className="lead">Discover tasty recipes and dishes from around the world — quick, fresh, and delicious.</p>
        </div>
        <div className="col-md-6 text-center">
          <img src="https://i.pinimg.com/736x/87/06/68/870668ff692431878d58b1e3c03c9d87.jpg" alt="Hyummy" style={{maxWidth:300}} />
        </div>
      </div>
    </div>
  )
}
