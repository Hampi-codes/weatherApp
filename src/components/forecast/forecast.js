import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion"

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
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel></AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
} 