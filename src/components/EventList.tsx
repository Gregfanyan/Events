import React, { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import Event from "./Event";
import { map } from "lodash";
import { eventProps } from "../types/events.types";

type grouppedEventsByDateProps = {
  grouppedEventsByDate: { [key: string]: eventProps };
};

const EventList: FunctionComponent<{
  grouppedEventsByDate: grouppedEventsByDateProps | {};
}> = ({ grouppedEventsByDate }) => {
  return (
    <Box>
      {Object.entries(grouppedEventsByDate).map(([date, events]) => (
        <div key={date}>
          <div>{date}</div>
          <ul>
            {map(events, (item, i) => (
              <li key={i}>{item.venue.name} </li>
            ))}
          </ul>
        </div>
      ))}
    </Box>
  );
};

export default EventList;
