type venueProps = {
  name: string;
  direction: string;
};

export type eventProps = {
  _id: string;
  title: string;
  flyerFront: string;
  startTime: Date;
  endTime: Date;
  venue: venueProps;
};
