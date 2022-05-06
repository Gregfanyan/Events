import React, { createContext, useContext, ReactNode, useState } from "react";
import { useApiRequest } from "../hooks/useApiRequest";
import { eventProps } from "../types/events.types";
type EventsContextProps = {
  events: eventProps[];
  isFetching: boolean;
  isLoading: boolean;
  setTitle: Function;
  title: string;
  onChangeHadler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setFilter: Function;
  filter: boolean;
  sortButtonHandleClick: () => void;
  handleAddToCart: (clickedItem: any) => void;
  setCartItems: Function;
  cartItems: eventProps[];
};

const EventsContextDefaultValues: EventsContextProps = {
  events: null as any,
  isFetching: null as any,
  isLoading: null as any,
  setTitle: Function,
  title: "",
  onChangeHadler: null as any,
  setFilter: Function,
  filter: null as any,
  sortButtonHandleClick: null as any,
  handleAddToCart: null as any,
  setCartItems: null as any,
  cartItems: null as any,
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

const url = process.env.REACT_APP_BASE_API_URL;
const ContextWrapper = ({ children }: Props) => {
  const [title, setTitle] = useState<string>("");
  const [filter, setFilter] = useState(false);
  const { data: events, isLoading, isFetching } = useApiRequest(url as string);
  const onChangeHadler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const sortButtonHandleClick = () => {
    setFilter(!filter);
  };
  const [cartItems, setCartItems] = useState<eventProps[]>([]);
  const [cartItemsAmount, setCartItemsAmount] = useState<number>(0);

  const handleAddToCart = (clickedItem: eventProps) => {
    setCartItems((prev: eventProps[]) => {
      const isItemInCart = prev.find((item) => item._id === clickedItem._id);

      if (isItemInCart) {
        return prev.map((item) =>
          item._id === clickedItem._id
            ? { ...item, amount: cartItemsAmount + 1 }
            : item
        );
      }
      return [...prev, clickedItem];
    });
  };
  console.log("cartItems", cartItems);
  return (
    <EventsContext.Provider
      value={{
        events,
        isFetching,
        isLoading,
        title,
        setTitle,
        onChangeHadler,
        filter,
        setFilter,
        sortButtonHandleClick,
        handleAddToCart,
        setCartItems,
        cartItems,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export default ContextWrapper;
