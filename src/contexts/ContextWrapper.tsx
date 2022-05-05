import React, { createContext, useContext, ReactNode } from "react";
import { useApiRequest } from "../hooks/useApiRequest";
import { eventProps } from "../types/events.types";
type EventsContextProps = {
  events: eventProps[];
  isFetching: boolean;
  isLoading: boolean;
};

const EventsContextDefaultValues: EventsContextProps = {
  events: null as any,
  isFetching: null as any,
  isLoading: null as any,
};

type Props = {
  children: ReactNode;
};

const EventsContext = createContext<EventsContextProps>(
  EventsContextDefaultValues
);

export function useEvents() {
  return useContext(EventsContext);
}

const ContextWrapper = ({ children }: Props) => {
  const url = process.env.REACT_APP_BASE_API_URL;
  const { data: events, isLoading, isFetching } = useApiRequest(url as string);

  return (
    <EventsContext.Provider value={{ events, isFetching, isLoading }}>
      {children}
    </EventsContext.Provider>
  );
};

export default ContextWrapper;
