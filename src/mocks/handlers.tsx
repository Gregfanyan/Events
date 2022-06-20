import { rest } from "msw";
const url = process.env.REACT_APP_BASE_API_URL;

export const handlers = [
  rest.get(
    "https://tlv-events-app.herokuapp.com/events/uk/london",
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            _id: "1",
            title: "Scoop 1",
            flyerFront: "interstelar.jpg",
            startTime: "24 September 2022 15:30 UTC",
            endTime: "25 September 2022 15:30 UTC",
            date: "2021-10-13T00:00:00.000",
            venue: {
              name: "venue 1",
              direction: "street 1",
            },
          },
          {
            _id: "2",
            title: "Scoop 2",
            flyerFront: "interstelars.jpg",
            startTime: "26 September 2022 15:30 UTC",
            endTime: "27 September 2022 15:30 UTC",
            date: "2021-10-14T00:00:00.000",
            venue: {
              name: "venue 2",
              direction: "street 2",
            },
          },
        ])
      );
    }
  ),
];
