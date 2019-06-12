import './style.sass'
import React from 'react'
import { getWeatherByCity } from '../../api';

export class Widget extends React.Component {
    componentWillMount() {
        getWeatherByCity().then((res) => console.log(res))
    }
    render() {
        return <div className={"wheather-widget__wrapper"}>
                <p>Car</p>
            </div>
    }
}