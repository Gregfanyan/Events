import React, { createContext, useContext, ReactNode } from "react";
import { useApiRequest } from "../hooks/useApiRequest";

type EventProps = {
  data: any;
  isFetching: boolean;
  isLoading: boolean;
};

const EventsContextDefaultValues: EventProps = {
  data: null,
  isFetching: null as any,
  isLoading: null as any,
};

type Props = {
  children: ReactNode;
};

const EventsContext = createContext<EventProps>(
  EventsContextDefaultValues
);

export function useEvents() {
  return useContext(EventsContext);
}

const ContextWrapper = ({ children }: Props) => {
  const url = process.env.REACT_APP_BASE_API_URL;
  const { data, isLoading, isFetching } = useApiRequest(url as string);

  return (
    <EventsContext.Provider value={{ data, isFetching, isLoading }}>
      {children}
    </EventsContext.Provider>
  );
};

export default ContextWrapper;
