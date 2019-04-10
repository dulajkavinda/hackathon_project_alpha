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
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
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
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
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
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
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
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
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
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
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
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
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
