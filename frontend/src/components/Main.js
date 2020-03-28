import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setWeather } from "../actions/weather";
import axios from "axios";
import { ReactComponent as HumiditySVG } from "../assets/humidity-solid.svg";
import { ReactComponent as PressureSVG } from "../assets/pressure.svg";
import { ReactComponent as WindSpeedSVG } from "../assets/speed-solid.svg";
import { ReactComponent as VisibilitySVG } from "../assets/eye-solid.svg";
import { ReactComponent as UVIndexSVG } from "../assets/uv-index.svg";
import { ReactComponent as OzoneSVG } from "../assets/ozone-solid.svg";

const Main = props => {
  const [lang, setLang] = useState("en");
  const [units, setUnits] = useState("si");

  const {
    address,
    humidity,
    pressure,
    windSpeed,
    visibility,
    uvIndex,
    ozone
  } = props.weatherData;

  useEffect(() => launchAxios(), [lang, units]);

  const launchAxios = addr => {
    console.log(lang, units, address);
    if (!address) {
      return;
    }

    const url =
      "http://localhost:3000/weather?address=" +
      address +
      "&units=" +
      units +
      "&lang=" +
      lang;

    axios
      .get(url)
      .then(res => {
        props.dispatch(setWeather(res.data));
      })
      .catch(e => console.log(e));
  };

  const siUnitClass = () => {
    if (units === "si") {
      return "units__settings active";
    } else return "units__settings";
  };
  const usUnitClass = () => {
    if (units === "us") {
      return "units__settings active";
    } else return "units__settings";
  };

  const trLangClass = () => {
    if (lang === "tr") {
      return "lang__settings active";
    } else return "lang__settings";
  };

  const enLangClass = () => {
    if (lang === "en") {
      return "lang__settings active";
    } else return "lang__settings";
  };

  return (
    <div className="main">
      <div className="main__settings">
        <h2>Settings</h2>
        <div className="settings">
          <div className="settings__units">
            <h3>Temperature Units</h3>
            <div className="button-groups">
              <button className={siUnitClass()} onClick={() => setUnits("si")}>
                C
              </button>
              <button className={usUnitClass()} onClick={() => setUnits("us")}>
                F
              </button>
            </div>
          </div>
          <div className="settings__language">
            <h3>Language</h3>
            <div className="button-groups">
              <button className={trLangClass()} onClick={() => setLang("tr")}>
                TR
              </button>
              <button className={enLangClass()} onClick={() => setLang("en")}>
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2>Today Hightlights</h2>
      <div className="main__highlights">
        <div className="main__highlight">
          <HumiditySVG className="icon--highlight" />
          <div className="highlight__info">
            <h3>Humidity</h3>
            {humidity ? <p>{humidity}</p> : <p>0.0</p>}
          </div>
        </div>
        <div className="main__highlight">
          <PressureSVG className="icon--highlight" />
          <div className="highlight__info">
            <h3>Pressure</h3>
            {pressure ? <p>{pressure}</p> : <p>0.0</p>}
          </div>
        </div>
        <div className="main__highlight">
          <WindSpeedSVG className="icon--highlight" />
          <div className="highlight__info">
            <h3>Wind Speed</h3>
            {windSpeed ? <p>{windSpeed}</p> : <p>0.0</p>}
          </div>
        </div>
      </div>
      <div className="main__highlights">
        <div className="main__highlight">
          <VisibilitySVG className="icon--highlight" />
          <div className="highlight__info">
            <h3>Visibility</h3>
            {visibility ? <p>{visibility}</p> : <p>0.0</p>}
          </div>
        </div>
        <div className="main__highlight">
          <UVIndexSVG className="icon--highlight" />
          <div className="highlight__info">
            <h3>UV Index</h3>
            {uvIndex ? <p>{uvIndex}</p> : <p>0.0</p>}
          </div>
        </div>
        <div className="main__highlight">
          <OzoneSVG className="icon--highlight" />
          <div className="highlight__info">
            <h3>Ozone</h3>
            {ozone ? <p>{ozone}</p> : <p>0.0</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  weatherData: state.data
});

export default connect(mapStateToProps)(Main);
