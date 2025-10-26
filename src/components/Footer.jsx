import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer mt-5">
      <div className="container text-white">
        <div className="row">
          <div className="col-md-6">
            <h5>Hyummy</h5>
            <p>Delicious ideas from around the world.</p>
          </div>
          <div className="col-md-3">
            <h6>Links</h6>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Menu</li>
              <li>About</li>
            </ul>
          </div>
          <div className="col-md-3 text-md-end mt-3 mt-md-0">
            <small>© {new Date().getFullYear()} Hyummy</small>
          </div>
        </div>
      </div>
    </footer>
  )
}
