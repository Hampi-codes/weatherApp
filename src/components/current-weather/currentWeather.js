import "./currentWeather.css"

export const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">Ghaziabad</p>
                    <p className="city-weather">Sunny</p>
                </div>
                <img alt="weather" className="weather-icon" src="icons/01d.png" />
            </div>
            <div className="bottom">
                <p className="temp">28°C</p>
                <div className="details">
                    <div className="parameters-row">
                        <span className="parameter-label">details</span>
                    </div>
                    <div className="parameters-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">22C</span>
                    </div>
                    <div className="parameters-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">3 m/s</span>
                    </div>
                    <div className="parameters-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">30%</span>
                    </div>
                    <div className="parameters-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">12 hpa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}