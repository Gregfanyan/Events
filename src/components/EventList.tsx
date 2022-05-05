import React, { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import Event from "./Event";
import { map } from "lodash";
import { eventProps } from "../types/events.types";
import { format } from "date-fns";

type grouppedEventsByDateProps = {
  grouppedEventsByDate: { [key: string]: eventProps };
};

const EventList: FunctionComponent<{
  grouppedEventsByDate: grouppedEventsByDateProps | {};
}> = ({ grouppedEventsByDate }) => {
  return (
    <Box>
      {Object.entries(grouppedEventsByDate).map(([date, events]) => {
        const formattedDate = format(new Date(date), "EEE MMM dd yyyy");
        return (
          <div key={date}>
            <div>{formattedDate}</div>
            <ul>
              {map(events, (item, i) => (
                <li key={i}>{item.venue.name} </li>
              ))}
            </ul>
          </div>
        );
      })}
    </Box>
  );
};

export default EventList;
