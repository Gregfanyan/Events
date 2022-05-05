import React, { FunctionComponent } from "react";
import { eventProps } from "../types/events.types";
import Box from "@mui/material/Box";
import Event from "./Event";
const EventList: FunctionComponent<{ events: eventProps[] }> = ({ events }) => {
  return (
    <Box>
      {events && events.map((event) => <Event key={event._id} event={event} />)}
    </Box>
  );
};

export default EventList;
