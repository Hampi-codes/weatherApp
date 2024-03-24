import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion"
import "./forecast.css";
export const Forecast = ({ data }) => {
    const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const currentDay = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(currentDay, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, currentDay)
    );

    console.log("foreeeeeee", forecastDays);

    return (
        <>
            <label className="title">Daily Forecast</label>
            <Accordion
                allowZeroExpanded
            >
                {data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                    <label className="day">{forecastDays[index]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min_max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max) + 2}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details">
                                <div className="daily-details-itmes">
                                    <label>Pressure</label>
                                    <label>{item.main.pressure}hpa</label>
                                </div>
                                <div className="daily-details-itmes">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className="daily-details-itmes">
                                    <label>clouds</label>
                                    <label>{item.clouds.all}</label>
                                </div>
                                <div className="daily-details-itmes">
                                    <label>Wind Speed</label>
                                    <label>{item.wind.speed}m/s</label>
                                </div>
                                <div className="daily-details-itmes">
                                    <label>Sea Level</label>
                                    <label>{item.main.sea_level}m</label>
                                </div>
                                <div className="daily-details-itmes">
                                    <label>Feels Like</label>
                                    <label>{Math.round(item.main.feels_like)}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
} 