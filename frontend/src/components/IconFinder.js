import React from "react";
import { ReactComponent as ClearDay } from "../assets/sun-solid.svg";
import { ReactComponent as ClearNight } from "../assets/moon-solid.svg";
import { ReactComponent as Rain } from "../assets/cloud-rain-solid.svg";
import { ReactComponent as Snow } from "../assets/snowflake-solid.svg";
import { ReactComponent as Wind } from "../assets/wind-solid.svg";
import { ReactComponent as Fog } from "../assets/fog-solid.svg";
import { ReactComponent as Cloud } from "../assets/cloud-solid.svg";
import { ReactComponent as CloudSun } from "../assets/cloud-sun-solid.svg";
import { ReactComponent as CloudNight } from "../assets/cloud-moon-solid.svg";

const iconFinder = icon => {
  switch (icon) {
    case "clear-day":
      return <ClearDay className="icon icon--clear-day" />;

    case "clear-night":
      return <ClearNight className="icon icon--clear-night" />;

    case "rain":
      return <Rain className="icon icon--rain" />;

    case "snow":
      return <Snow className="icon icon--snow" />;

    case "sleet":
      return <Rain className="icon icon--rain" />;

    case "wind":
      return <Wind className="icon icon--wind" />;

    case "wind":
      return <Fog className="icon icon--fog" />;

    case "cloudy":
      return <Cloud className="icon icon--cloudy" />;

    case "partly-cloudy-day":
      return <CloudSun className="icon icon--cloud-sun" />;

    case "partly-cloudy-night":
      return <CloudNight className="icon partly-cloudy-night" />;

    default:
      return <ClearDay className="icon icon--clear-day" />;
  }
};

const IconFinder = props => {
  return <div className="icon-container">{iconFinder(props.icon)}</div>;
};

export default IconFinder;
