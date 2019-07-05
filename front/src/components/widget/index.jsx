import "./style.sass";
import React from "react";
import { getWeatherByCity } from "../../api";

export class Widget extends React.Component {
  state = {
    temp: 0,
    pressure: 0,
    temp_max: 0,
    temp_min: 0,
    IsDataLoading: false
  };
  componentWillMount() {
    setInterval(() => this.setState({ IsDataLoading: true }), 5000);
  }
  componentDidUpdate(prevProps, prevState) {
    prevState.IsDataLoading === false &&
      this.state.IsDataLoading &&
      getWeatherByCity()
        .then(
          res => new Promise(resolve => setTimeout(() => resolve(res), 1000))
        )
        .then(res => {
          console.log(res);
          this.setState((state, props) => {
            if (res.data.main && !res.data) {
              return;
            }
            const { temp, pressure, temp_max, temp_min } = res.data.main;
            return { temp, pressure, temp_max, temp_min, IsDataLoading: false };
          });
        });
  }
  render() {
    const { temp, pressure, temp_max, temp_min } = this.state;
    return (
      <div className={"wheather-widget__wrapper"}>
        {!temp ? (
          <div className="cssload-loader" />
        ) : (
          <div>
            <p>Weather in Kiev</p>
            <div className={"wheather-widget__current-temp"}>
              <p>{temp} C</p>
            </div>
            <p>{pressure} mm/rh</p>
            <p>max temp: {temp_max} C</p>
            <p>min temp: {temp_min} C</p>
          </div>
        )}
      </div>
    );
  }
}
