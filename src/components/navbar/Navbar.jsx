import React, { useEffect, useState } from "react"
import "./Navbar.scss"
export const Navbar = () => {
  const [active, setActive] = useState(false)
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", isActive)
    return window.removeEventListener("scroll", isActive())
  }, [])
  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <span className="text">fiverr</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>Become a Seller</span>
          <span>Sign in</span>
          <button>Join</button>
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Transalation</span>
          </div>
        </>
      )}
    </div>
  )
}
