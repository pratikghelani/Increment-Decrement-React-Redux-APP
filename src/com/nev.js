import React from 'react'
import { useSelector } from "react-redux";
export default function nev() {
  const changeTheNumber = useSelector(state => state.changeTheNumber);
    return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{changeTheNumber}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          </div>
        </div>
      </nav>
    </div>
  )
}