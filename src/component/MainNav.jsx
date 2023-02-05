import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Dropdown from './Dropdown'
import './MainNav.css'

function MainNav(props) {
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 navimg"
            src="image/c1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 navimg"
            src="image/c2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 navimg"
            src="image/c3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="mainnavbox">
        <button className="search">Search</button>
      </div>
      <div>
        <h1 className="search1">Most Searched</h1>
      </div>
      <h2 className="prop">Housr Properties</h2>
    </>
  )
}

export default MainNav

{
  /* <input
className="city"
type="text"
placeholder="Search by City"
list="city"
onChange={visible}
/>
<div className="box1">
<ul className="cityitem">
  <li className="guru">Gurugram</li>
  <li className="hyd">Hyderabad</li>

  <li className="pune">Pune</li>

  <li className="bng">Banglore</li>
</ul>
</div> */
}

// <input
//           className="category"
//           type="text"
//           placeholder="Search by Category"
//           onChange={invisible}
//         />
//         <div className="box2">
//           <ul className="cityitem1">
//             <li className="co">Housr Coliving</li>
//             <li className="homes">Housr Homes</li>

//             <li className="homes">StayAbode By Housr</li>
//           </ul>
//         </div>
