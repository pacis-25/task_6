import React from 'react'
import Image1 from './images/image1.svg'
import Image2 from './images/image2.svg'
import Image3 from './images/image3.svg'
import Image4 from './images/image4.svg'
import Image5 from './images/image5.svg'
import Image6 from './images/image6.svg'

const Icon = ({label}) => <span className="icon-sm" aria-hidden="true" title={label} />

const Placeholder = ({src, alt}) => (
  <img src={src} alt={alt} />
)

export default function App(){
  const images = [Image1, Image2, Image3, Image4, Image5, Image6]
  return (
    <>
      <header className="header">
        <div className="container bar">
          <div style={{display:'flex',alignItems:'center',gap:16}}>
            <img src={Image1} alt="PrimePutt" width="26" height="26" />
            <strong>PrimePutt</strong>
          </div>
          <nav className="nav" aria-label="Main">
            <a href="#">Putting Mat</a>
            <a href="#">All Products</a>
            <a href="#">Contact</a>
            <a href="#" aria-label="Search">🔍</a>
            <a href="#" aria-label="Account">👤</a>
            <a href="#" aria-label="Cart">👜</a>
          </nav>
        </div>
      </header>

      <div className="page container">
        <div className="product-grid">
          {/* LEFT COLUMN */}
          <div>
            <div className="media">
              <Placeholder src={Image3} alt="Putting green close-up" />
            </div>
            <div className="thumbs">
              <span className="chev">‹</span>
              {images.map((img, i)=> (
                <div className="thumb" key={1}>
                  <img src={img} alt={`Thumbnail`} />
                </div>
              ))}
              <span className="chev">›</span>
            </div>

            {/* Bottom-left testimonial becomes static badge */}
            <div className="badge">
              <img src={Image5} alt="Award icon"/>
              <div>
                <strong>Named Best Indoor Putting Green</strong>
                <p style={{margin:'6px 0 0', color:'var(--muted)'}}>
                  “The roll of the PrimePutt is unmatched. The turf provides a smooth and consistent roll,
                  closely resembling the feel of a real grass green.” — MyGolfSpy
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="right">
            <div className="rating">★★★★★ 238+ Reviews by PGA Pros, Coaches & Players</div>
            <h1>Tour-Quality Indoor/Outdoor Golf Putting Green</h1>
            <div className="price">₱28,800 PHP</div>

            <div style={{color:'var(--muted)', marginBottom:8}}>Available size options:</div>
            <div className="options">
              <div className="opt">
                <div>Compact</div>
                <small>9’ x 1.5’</small>
                <small>Single Hole</small>
              </div>
              <div className="opt selected">
                <div>Standard</div>
                <small>9’ x 3’</small>
              </div>
              <div className="opt">
                <div>XL</div>
                <small>12’ x 3’</small>
              </div>
              <div className="opt">
                <div>XXL</div>
                <small>15’ x 3’</small>
              </div>
            </div>

            <div className="btns">
              <a className="btn primary" href="#">ADD TO CART</a>
              <a className="btn purple" href="#">Buy with shop</a>
            </div>
            <div className="link">More payment options</div>

            <div className="icons">
              <div className="icon"><Icon/><span>Made in the USA</span></div>
              <div className="icon"><Icon/><span>Stimp 9–11</span></div>
              <div className="icon"><Icon/><span>Free shipping in US</span></div>
            </div>

            <div className="hr" />

            <div className="section">
              <h2>American Turf. Tour Tested.</h2>
              <p>
                Lower your score and increase consistency by practicing daily on a quality, tour‑grade turf putting
                green for both indoors & outdoors. Our product offers a true roll with a 9–11 Stimpmeter reading and
                the most realistic experience you'll find anywhere outside a real course.
              </p>

              {/* Right-bottom dropdowns reimagined as static boxes */}
              <div className="boxes">
                <div className="box">
                  <div className="label"><Icon label="Details"/> Details</div>
                  <div className="right">▼</div>
                </div>
                <div className="box">
                  <div className="label"><Icon label="Dimensions"/> Dimensions</div>
                  <div className="right">▼</div>
                </div>
                <div className="box">
                  <div className="label"><Icon label="What's Included"/> What's Included</div>
                  <div className="right">▼</div>
                </div>
                <div className="box">
                  <div className="label"><Icon label="Setup & Care"/> Setup & Care</div>
                  <div className="right">▼</div>
                </div>
                <div className="box">
                  <div className="label"><Icon label="Description"/> Description</div>
                  <div className="right">▼</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
