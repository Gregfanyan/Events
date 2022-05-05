import { useEvents } from "../contexts/ContextWrapper";
import { eventProps } from "../types/events.types";
import { useMemo } from "react";

const useSearchFilteredEvents = (title: string) => {
  const { events } = useEvents();

  const filteredEvents = useMemo(() => {
    return (
      events &&
      [...events].filter((event: eventProps) =>
        event.title.toLowerCase().includes(title.toLowerCase())
      )
    );
  }, [events, title]);
  return [filteredEvents] as const;
};

export default useSearchFilteredEvents;
