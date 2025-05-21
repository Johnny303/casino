import React from 'react'
import { Link } from 'react-router-dom'

export const Casinos = () => {
  return (
    <>
    <h1>Casinos</h1>
    <Link to="/casino/1">Casino 1</Link>
    <Link to="/casino/2">Casino 2</Link>
    </>
  )
}
