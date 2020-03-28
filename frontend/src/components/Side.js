import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setWeather } from "../actions/weather";
import IconFinder from "./IconFinder";
import { ReactComponent as SpinnerSVG } from "../assets/spinner-solid.svg";

class Side extends Component {
  state = {
    address: ""
  };

  onSearchInputChange = e => {
    this.setState({ address: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.dispatch(setWeather({}));

    const address = this.state.address && "sivas";

    axios
      .get(
        "http://localhost:3000/weather?address=" +
          address +
          "&units=si" +
          "&lang=en"
      )
      .then(res => {
        //console.log(res);
        this.props.dispatch(setWeather(res.data));
      })
      .catch(e => console.log(e));

    this.setState({ address: "" });
  };

  render() {
    return (
      <div className="side">
        <form className="side__form" onSubmit={this.onFormSubmit}>
          <input
            className="side__form__input"
            type="text"
            value={this.state.address}
            onChange={this.onSearchInputChange}
            placeholder="Search for locations..."
          />
        </form>

        {this.props.weatherData.location !== undefined ? (
          this.props.weatherData.location !== "unknown" ? (
            <div className="side__forecast">
              <p className="side__forecast__location">
                {this.props.weatherData.location}
              </p>
              <div className="side__forecast__body">
                <IconFinder icon={this.props.weatherData.icon} />
                <div className="side__forecast__temperature">
                  <span className="temperature">
                    {Math.floor(this.props.weatherData.temperature)}
                  </span>
                  <span className="temperature__unit">
                    °{this.props.weatherData.units === "si" ? "C" : "F"}
                  </span>
                </div>
              </div>

              <div className="side__forecast__summary">
                <p>{this.props.weatherData.summary}</p>
              </div>
              <div className="side__forecast__statistic">
                <p className="result__type">
                  {this.props.weatherData.precipType}
                  <spam>
                    {" - "}
                    {Math.floor(this.props.weatherData.precipProbability * 100)}
                    %
                  </spam>
                </p>
              </div>
            </div>
          ) : (
            <p>Enter location</p>
          )
        ) : (
          <SpinnerSVG className="icon--spinner" />
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  weatherData: state.data
});

export default connect(mapStateToProps)(Side);
