import { useEvents } from "../contexts/ContextWrapper";
import { eventProps } from "../types/events.types";
import { useMemo } from "react";
import { sortBy } from "lodash";

const useSearchFilteredEvents = (title: string) => {
  const { events, filter } = useEvents();

  const filteredEvents = useMemo(() => {
    const filteredEvents =
      events &&
      [...events].filter((event: eventProps) =>
        event.title.toLowerCase().includes(title.toLowerCase())
      );
    const sortByDate = sortBy(filteredEvents, (event) => {
      return filter && event.date;
    });
    return sortByDate;
  }, [events, title, filter]);
  return [filteredEvents] as const;
};

export default useSearchFilteredEvents;
