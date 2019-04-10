import React, { Component } from "react";
import Cards from "../Cards";
import img from "../../img/67792454.jpg";
import img2 from "../../img/botanical_gardens_sri_lanka.jpg";
import img3 from "../../img/lankathilaka-viharaya-4.jpg";
import img4 from "../../img/pooh-eco-trekking-day.jpg";
import img5 from "../../img/1200px-Zahntempel_Kandy.jpg";
import { Link } from "react-router-dom";

export default class Plan extends Component {
  render() {
    return (
      <div>
        <div class="card-deck">
          <Cards
            picture={img5}
            title="Temple of the Tooth"
            dis="Sri Dalada Maligawa or the Temple of the Sacred Tooth Relic is a Buddhist temple in the city of Kandy, Sri Lanka.
            "
            loc="Kandy/Sri Lanka"
            type="Religious Place"
          />
          <Cards
            picture={img2}
            title="Peradeniya Botanical Garden"
            dis="Royal Botanic Gardens, Peradeniya are about 5.5 km to the west of the city of Kandy in the Central Province of Sri Lanka."
            loc="Peradeniya Rd, Kandy"
            type="Park
            "
          />
          <Cards
            picture={img3}
            title="Lanakathilaka Viaharaya
            "
            dis="Lankatilaka Vihara is an ancient Buddhist temple situated in Udunuwara of Kandy, Sri Lanka. It is located on few kilometres from the ancient buddhist temple, Gadaladeniya Vihara.
          "
            loc="Kovilakanda
            "
            type="Religious Place
            "
          />
          <Cards
            picture={img4}
            title="Sri Lanka eco trekking
            view on"
            dis="Kandy Sri Lanka eco tourism Warmly Welcome you all Client joining the Sri Lanka leading eco trekking in Kandy."
            loc="31/A Hamangoda Rd, Katugastota
            "
            type="Hiking Site
            "
          />
          <Cards
            picture={img}
            title="Queen Hotel Kandy"
            dis="A 5-minute walk from Sri Dalada Maligawa, a Buddhist temple,
            "
            loc="D S Senanayake Veediya, Kandy 20000"
            type="Hotel"
          />
        </div>
        <div>
          <Link
            to="/plan"
            className="btn text-center btn-xlarge btn-lg btn-info mr-2"
          >
            FINISH PLANNING
          </Link>
        </div>
      </div>
    );
  }
}
