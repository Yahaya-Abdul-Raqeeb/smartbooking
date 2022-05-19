import React from 'react'
import image from "../images.jpeg"
import plane from "../plane.jpg"
import hills from "../hills.jpg"
import movin from "../movin.jpg"
import oa from "../oa.jpg"
import stc from "../stc.jpg"
import empire from "../empire.jpg"
import {AuthContext} from "../context/auth.Context"

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="card">
          <img src={stc} alt="no Coaches" />
          <div className="textGroup">
            <h1>InterCity STC </h1>
            <h4>
              {" "}
              <a href="0520847899"> Contact: 0520847899 </a>
            </h4>
            <h4>
              {" "}
              <a href="https://stcticketing.gov.gh/">
                {" "}
                Contact: https://stcticketing.gov.gh/
              </a>{" "}
            </h4>
            <p>
              Book a bus ticket and enjoy your ride without cramming for space,
              in a comfortable bus, at a cost that your pocket can happily bear.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={plane} alt="no plane" />
          <div className="textGroup">
            <h1> V.I.P </h1>
            <h4>
              {" "}
              <a href="0520847899"> Contact: 0520847899 </a>
            </h4>
            <h4>
              {" "}
              <a href="https://stcticketing.gov.gh/">
                {" "}
                Link: https://stcticketing.gov.gh/{" "}
              </a>
            </h4>
            <p>
              Book a Flight ticket and enjoy your ride without cramming for
              space, in a comfortable bus, at a cost that your pocket can
              happily bear.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={hills} alt="no hotels" />
          <div className="textGroup">
            <h1> Royal Cosy Hills </h1>
            <h4>
              {" "}
              <a href="0520847899"> Contact: 0520847899 </a>
            </h4>
            <h4>
              {" "}
              <a href="https://royalcosyhills.com/">
                {" "}
                Link: https://royalcosyhills.com/{" "}
              </a>
            </h4>
            <p>
              Book a Hotel and enjoy your Stay without cramming for space, in a
              comfortable room, at a cost that your pocket can happily bear.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={oa} alt="no hotels" />
          <div className="textGroup">
            <h1>O.A Travel And Tour</h1>
            <h4>
              {" "}
              <a href="0302236917"> Contact: 0302236917 </a>
            </h4>
            <h4>
              {" "}
              <a href="https://oatravelandtours.com/">
                {" "}
                Link: https://oatravelandtours.com/{" "}
              </a>
            </h4>
            <p>
              Book a bus ticket and enjoy your ride without cramming for space,
              in a comfortable bus, at a cost that your pocket can happily bear.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={image} alt="no coaches" />
          <div className="textGroup">
            <h1>Mostodiq Coaches </h1>
            <h4>
              {" "}
              <a href="0520847899"> Contact: 0520847899 </a>
            </h4>
            <h4>
              {" "}
              <a href="https://stcticketing.gov.gh/">
                {" "}
                Link: https://stcticketing.gov.gh/{" "}
              </a>
            </h4>
            <p>
              Book a bus ticket and enjoy your ride without cramming for space,
              in a comfortable bus, at a cost that your pocket can happily bear.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={empire} alt="no image" />
          <div className="textGroup">
            <h1>Nuoyong Empire Hotel </h1>
            <h4>
              {" "}
              <a href="0520847899"> Contact: 0520847899 </a>
            </h4>
            <h4>
              {" "}
              <a href=" https://www.findmeahotelroom.com/hotels/upper-west-region/nili/nuoyong-empire-hotel">
                {" "}
                Link:shorturl.at/buyW5{" "}
              </a>
            </h4>
            <p>
              Book a room and enjoy your Stay without cramming for space, in a
              comfortable Hotel, at a cost that your pocket can happily bear.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={stc} alt="no buses" />
          <div className="textGroup">
            <h1>InterCity STC </h1>
            <h4>
              {" "}
              <a href="0520847899"> Contact: 0520847899 </a>
            </h4>
            <h4>
              {" "}
              <a href="https://stcticketing.gov.gh/">
                {" "}
                Link: https://stcticketing.gov.gh/{" "}
              </a>
            </h4>
            <p>
              Book a bus ticket and enjoy your ride without cramming for space,
              in a comfortable bus, at a cost that your pocket can happily bear.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={movin} alt="no image" />
          <div className="textGroup">
            <h1> MoevenPick Ambassador Hotel</h1>
            <h4>
              {" "}
              <a href="0520847899"> Contact: 0520847899 </a>
            </h4>
            <h4>
              {" "}
              <a href="https://www.movenpick.com/en/africa/ghana/accra/moevenpick-ambassador-hotel-accra.html">
                {" "}
                Link: shorturl.at/nEKN1{" "}
              </a>
            </h4>
            <p>
              Book a bus ticket and enjoy your ride without cramming for space,
              in a comfortable bus, at a cost that your pocket can happily bear.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home