import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './CarouselCard.css'

export default class Resizable extends Component {
  state = {
    display: true,
    width: 600,
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    }
    return (
      <div>
        <h2> Resizable Collapsible </h2>
        <button
          className="button"
          onClick={() =>
            this.setState({
              width: this.state.width + 100,
            })
          }
        >
          increase
        </button>
        <button
          className="button"
          onClick={() =>
            this.setState({
              width: this.state.width - 100,
            })
          }
        >
          {' '}
          decrease{' '}
        </button>
        <button
          className="button"
          onClick={() =>
            this.setState({
              display: !this.state.display,
            })
          }
        >
          {' '}
          toggle{' '}
        </button>
        <div
          style={{
            width: this.state.width + 'px',
            display: this.state.display ? 'block' : 'none',
          }}
        >
          <Slider {...settings}>
            <div>
              <h3 className="img1h">
                <img className="img1" src="image/cd1.webp" alt="" />
                <h5 className="phase">Housr Luxary homes Phase-IV</h5>
                <h5 className="gurgaon">
                  <i class="fa-solid fa-location-pin location"></i>Sector
                  57-gurgaon
                </h5>
                <h5 className="share">
                  <i class="fa-sharp fa-solid fa-share sharearrow"></i>share
                </h5>
                <h5 className="sharing">
                  Twin sharing@ <span className="rs1">Rs.19800</span>
                </h5>
                <hr className="hr1" />
                <h5 className="sharing1">
                  Solo sharing@ <span className="rs2"> Rs.38800</span>
                </h5>
                <hr className="hr2" />
                <h4 className="direction">
                  <i class="fa-sharp fa-solid fa-route dire"></i>Directions
                </h4>
                <button className="booknow">
                  <h6 className="booktext">
                    <i class="fa-sharp fa-solid fa-hand-point-right hand"></i>
                    Book now
                  </h6>
                </button>
              </h3>
            </div>
            <div>
              <h3 className="img2h">
                <img className="img2" src="image/cd2.webp" alt="" />
                <h5 className="phase">Housr Luxary homes Phase-IV</h5>
                <h5 className="gurgaon">
                  <i class="fa-solid fa-location-pin location"></i>Sector
                  57-gurgaon
                </h5>
                <h5 className="share">
                  <i class="fa-sharp fa-solid fa-share sharearrow"></i>share
                </h5>
                <h5 className="sharing">
                  Twin sharing@ <span className="rs1">Rs.19800</span>
                </h5>
                <hr className="hr1" />
                <h5 className="sharing1">
                  Solo sharing@ <span className="rs2"> Rs.38800</span>
                </h5>
                <hr className="hr2" />
                <h4 className="direction">
                  <i class="fa-sharp fa-solid fa-route dire"></i>Directions
                </h4>
                <button className="booknow">
                  <h6 className="booktext">
                    <i class="fa-sharp fa-solid fa-hand-point-right hand"></i>
                    Book now
                  </h6>
                </button>
              </h3>
            </div>
            <div>
              <h3 className="img3h">
                <img className="img3" src="image/cd3.webp" alt="" />
                <h5 className="phase">Housr Luxary homes Phase-IV</h5>
                <h5 className="gurgaon">
                  <i class="fa-solid fa-location-pin location"></i>Sector
                  57-gurgaon
                </h5>
                <h5 className="share">
                  <i class="fa-sharp fa-solid fa-share sharearrow"></i>share
                </h5>
                <h5 className="sharing">
                  Twin sharing@ <span className="rs1">Rs.19800</span>
                </h5>
                <hr className="hr1" />
                <h5 className="sharing1">
                  Solo sharing@ <span className="rs2"> Rs.38800</span>
                </h5>
                <hr className="hr2" />
                <h4 className="direction">
                  <i class="fa-sharp fa-solid fa-route dire"></i>Directions
                </h4>
                <button className="booknow">
                  <h6 className="booktext">
                    <i class="fa-sharp fa-solid fa-hand-point-right hand"></i>
                    Book now
                  </h6>
                </button>
              </h3>
            </div>
            <h3 className="img1h">
              <img className="img1" src="image/cd4.webp" alt="" />
              <h5 className="phase">Housr Luxary homes Phase-IV</h5>
              <h5 className="gurgaon">
                <i class="fa-solid fa-location-pin location"></i>Sector
                57-gurgaon
              </h5>
              <h5 className="share">
                <i class="fa-sharp fa-solid fa-share sharearrow"></i>share
              </h5>
              <h5 className="sharing">
                Twin sharing@ <span className="rs1">Rs.19800</span>
              </h5>
              <hr className="hr1" />
              <h5 className="sharing1">
                Solo sharing@ <span className="rs2"> Rs.38800</span>
              </h5>
              <hr className="hr2" />
              <h4 className="direction">
                <i class="fa-sharp fa-solid fa-route dire"></i>Directions
              </h4>
              <button className="booknow">
                <h6 className="booktext">
                  <i class="fa-sharp fa-solid fa-hand-point-right hand"></i>Book
                  now
                </h6>
              </button>
            </h3>
            <div></div>
            <div>
              <h3 className="img2h">
                <img className="img2" src="image/c1.jpg" alt="" />
                <h5 className="phase">Housr Luxary homes Phase-IV</h5>
                <h5 className="gurgaon">
                  <i class="fa-solid fa-location-pin location"></i>Sector
                  57-gurgaon
                </h5>
                <h5 className="share">
                  <i class="fa-sharp fa-solid fa-share sharearrow"></i>share
                </h5>
                <h5 className="sharing">
                  Twin sharing@ <span className="rs1">Rs.19800</span>
                </h5>
                <hr className="hr1" />
                <h5 className="sharing1">
                  Solo sharing@ <span className="rs2"> Rs.38800</span>
                </h5>
                <hr className="hr2" />
                <h4 className="direction">
                  <i class="fa-sharp fa-solid fa-route dire"></i>Directions
                </h4>
                <button className="booknow">
                  <h6 className="booktext">
                    <i class="fa-sharp fa-solid fa-hand-point-right hand"></i>
                    Book now
                  </h6>
                </button>
              </h3>
            </div>
            <div>
              <h3 className="img3h">
                <img className="img3" src="image/cd3.webp" alt="" />
                <h5 className="phase">Housr Luxary homes Phase-IV</h5>
                <h5 className="gurgaon">
                  <i class="fa-solid fa-location-pin location"></i>Sector
                  57-gurgaon
                </h5>
                <h5 className="share">
                  <i class="fa-sharp fa-solid fa-share sharearrow"></i>share
                </h5>
                <h5 className="sharing">
                  Twin sharing@ <span className="rs1">Rs.19800</span>
                </h5>
                <hr className="hr1" />
                <h5 className="sharing1">
                  Solo sharing@ <span className="rs2"> Rs.38800</span>
                </h5>
                <hr className="hr2" />
                <h4 className="direction">
                  <i class="fa-sharp fa-solid fa-route dire"></i>Directions
                </h4>
                <button className="booknow">
                  <h6 className="booktext">
                    <i class="fa-sharp fa-solid fa-hand-point-right hand"></i>
                    Book now
                  </h6>
                </button>
              </h3>
            </div>
          </Slider>
        </div>
      </div>
    )
  }
}
