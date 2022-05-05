type venueProps = {
  id: string;
  name: string;
  contentUrl: string;
  live: boolean;
  direction: string;
};

type blurbProps = {
  blurb: string;
  id: string;
};

type artistProps = {
  id: string;
  name: string;
  _id: { $oid: string };
};

export type eventProps = {
  _id: string;
  title: string;
  flyerFront: string;
  attending: number;
  date: Date;
  startTime: Date;
  endTime: Date;
  contentUrl: string;
  venue: venueProps;
  pick: blurbProps;
  artists: artistProps[];
  city: string;
  country: string;
  private: boolean;
  __v: number;
};
