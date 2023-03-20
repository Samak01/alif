import React from 'react'
import Header from './Header'

function AddPosts() {
  return (
    <div>
      <div className="contain">
        <Header />
      </div>
      <div className="form" style={{display: 'flex', justifyContent: "center", alignItems: "center",  textAlign: "center", height: "50vh"}}>
        <h1>К сожелению добавить нового поста невозможно!</h1>
      </div>
    </div>
  )
}

export default AddPosts