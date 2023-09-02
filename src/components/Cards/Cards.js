import React, { useState } from "react";
import CardItem from "../CardItem/CardItem";
import s from "./Cards.module.css";

function Cards({ data }) {
  const [elToShow, setElToShow] = useState(2);
  const [allFlights, setAllFlights] = useState(false);

  const delta = 10;
  return (
    <div className={s.main}>
      {data.length < 1 ? (
        <div className={s.notFound}>По вашему запросу ничего не найдено</div>
      ) : (
        <>
          {data.slice(0, elToShow).map((item, index) => {
            const segment1 = item.flight.legs[0].segments[0];
            const segment2 = item.flight.legs[0].segments[1];
            const isDirect = item.flight.legs[0].segments.length === 1;

            const returnSegment1 = item.flight.legs[1].segments[0];
            const returnSegment2 = item.flight.legs[1].segments[1];
            const returnIsDirect = item.flight.legs[1].segments.length === 1;
            return (
              <CardItem
                key={index}
                departureCity={segment1.departureCity?.caption}
                departureAirport={segment1.departureAirport?.caption}
                departureAirportUid={segment1.departureAirport.uid}
                arrivalCity={
                  isDirect
                    ? segment1.arrivalCity?.caption
                    : segment2.arrivalCity?.caption
                }
                arrivalAirport={
                  isDirect
                    ? segment1.arrivalAirport?.caption
                    : segment2.arrivalAirport?.caption
                }
                arrivalAirportUid={
                  isDirect
                    ? segment1.arrivalAirport.uid
                    : segment2.arrivalAirport.uid
                }
                departureDate={segment1.departureDate}
                arrivalDate={
                  isDirect ? segment1.arrivalDate : segment2.arrivalDate
                }
                carrier={item.flight.carrier?.caption}
                isDirect={isDirect}
                price={item.flight.price.total.amount}
                currencyCode={item.flight.price.total.currencyCode}
                returnDepartureCity={returnSegment1.departureCity?.caption}
                returnDepartureAirport={
                  returnSegment1.departureAirport?.caption
                }
                returnDepartureAirportUid={returnSegment1.departureAirport.uid}
                returnArrivalCity={
                  returnIsDirect
                    ? returnSegment1.arrivalCity?.caption
                    : returnSegment2.arrivalCity?.caption
                }
                returnArrivalAirport={
                  returnIsDirect
                    ? returnSegment1.arrivalAirport?.caption
                    : returnSegment2.arrivalAirport?.caption
                }
                returnArrivalAirportUid={
                  returnIsDirect
                    ? returnSegment1.arrivalAirport.uid
                    : returnSegment2.arrivalAirport.uid
                }
                returnDepartureDate={returnSegment1.departureDate}
                returnArrivalDate={
                  returnIsDirect
                    ? returnSegment1.arrivalDate
                    : returnSegment2.arrivalDate
                }
                returnIsDirect={returnIsDirect}
              />
            );
          })}
          {!allFlights && (
            <button
              className={s.btn}
              onClick={() => {
                setElToShow(elToShow + delta);
                elToShow >= data.length && setAllFlights(true);
              }}
            >
              Показать еще
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default Cards;
