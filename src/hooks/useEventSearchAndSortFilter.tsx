import { useEvents } from "../contexts/ContextWrapper";
import { eventProps } from "../types/events.types";
import { useMemo } from "react";
import { orderBy } from "lodash";

const useFilteredAndSortedEvents = (title: string) => {
  const { events, filter } = useEvents();

  const filteredEvents = useMemo(() => {
    const filteredEvents =
      events &&
      [...events].filter((event: eventProps) =>
        event.title.toLowerCase().includes(title.toLowerCase())
      );

    let sortByDate = orderBy(
      filteredEvents,
      ["date"],
      filter ? ["desc"] : ["asc"]
    );
    return sortByDate;
  }, [events, title, filter]);
  return [filteredEvents] as const;
};

export default useFilteredAndSortedEvents;
