import React from 'react'
import Layouts from '../layouts/layouts'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Layouts>Home
       <Link to={"/login"}>login</Link>
    </Layouts>
  )
}

export default Home