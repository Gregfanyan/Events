import React, { FunctionComponent } from "react";
import { eventProps } from "../types/events.types";

const Event: FunctionComponent<{ event: eventProps }> = ({ event }) => {
  return <div>{event.venue.name}</div>;
};

export default Event;
