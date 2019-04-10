import React, { Component } from "react";
import { Link } from "react-router-dom";
class About extends Component {
  render() {
    return (
      <div className="about">
        <div>
          <div class="card-deck">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Area Preference</h5>
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-secondary dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Area Preference
                  </button>
                  <div class="dropdown-menu dropdown-menu-right">
                    <button class="dropdown-item" type="button">
                      Urban
                    </button>
                    <button class="dropdown-item" type="button">
                      Village
                    </button>
                    <button class="dropdown-item" type="button">
                      Something else here
                    </button>
                  </div>
                </div>
                <br />
                <p class="card-text">
                  <b>Visit a rural village or a big city!</b>
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Foods</h5>
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-secondary dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Select Foods
                  </button>
                  <div class="dropdown-menu dropdown-menu-right">
                    <button class="dropdown-item" type="button">
                      Sri Lankan
                    </button>
                    <button class="dropdown-item" type="button">
                      Indian
                    </button>
                    <button class="dropdown-item" type="button">
                      Europian
                    </button>
                    <button class="dropdown-item" type="button">
                      Italian
                    </button>
                    <button class="dropdown-item" type="button">
                      Chinese
                    </button>
                  </div>
                </div>
                <br />
                <p class="card-text">Wide Variety of flavours!</p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Activites</h5>
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-secondary dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Select Activities
                  </button>
                  <div class="dropdown-menu dropdown-menu-right">
                    <button class="dropdown-item" type="button">
                      Advanture
                    </button>
                    <button class="dropdown-item" type="button">
                      Hiking
                    </button>
                    <button class="dropdown-item" type="button">
                      Swimming
                    </button>
                    <button class="dropdown-item" type="button">
                      Surfing
                    </button>
                    <button class="dropdown-item" type="button">
                      Singing
                    </button>
                  </div>
                </div>
                <br />
                <p class="card-text">Go for a hike or enjoy the sunset!</p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card-deck">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Amount</h5>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Select Amount
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                  <button class="dropdown-item" type="button">
                    $
                  </button>
                  <button class="dropdown-item" type="button">
                    $$
                  </button>
                  <button class="dropdown-item" type="button">
                    $$$
                  </button>
                  <button class="dropdown-item" type="button">
                    $$$$
                  </button>
                </div>
                <br />
              </div>
              <p class="card-text">Best deals for the best price!</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Climate</h5>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Select Climate
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                  <button class="dropdown-item" type="button">
                    Sunny
                  </button>
                  <button class="dropdown-item" type="button">
                    Cold
                  </button>
                  <button class="dropdown-item" type="button">
                    Modarate
                  </button>
                </div>
                <br />
              </div>
              <p class="card-text">
                Enjoy an evening walk in the hot sun or a misty day!
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Duration</h5>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Select Duration
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                  <button class="dropdown-item" type="button">
                    Urban
                  </button>
                  <button class="dropdown-item" type="button">
                    Village
                  </button>
                  <button class="dropdown-item" type="button">
                    Something else here
                  </button>
                </div>
              </div>
              <p class="card-text">Stay with us to your heart's contents!</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div>
            <Link to="/plan" className="btn btn-xlarge btn-lg btn-info mr-2">
              NEXT STEP
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
