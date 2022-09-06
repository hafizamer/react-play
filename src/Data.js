import React from 'react'

const Data = (data) => {
    return (
    <>
      <h1>Name:{data.name}</h1>
            <h1>Age:{data.age}</h1>
            <h1>Height:{data.height} cm</h1>
    </>
  )
}

export default Data