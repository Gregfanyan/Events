import React, { FunctionComponent } from "react";
import { eventProps } from "../types/events.types";

const Event: FunctionComponent<{ event: eventProps }> = ({ event }) => {
  return <div>{event.flyerFront}</div>;
};

export default Event;
