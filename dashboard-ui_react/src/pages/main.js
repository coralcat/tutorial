import React from "react"
import { Link } from "react-router-dom"

const Main = () => {
  return (
    <div>
      <h2>Main Page</h2>
      <Link to="/charts">charts</Link>
    </div>
  )
}

export default Main