import React, { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import Event from "./Event";
import { eventProps } from "../types/events.types";
import { format } from "date-fns";
type grouppedEventsByDateProps = {
  grouppedEventsByDate: { [key: string]: eventProps };
};

const EventList: FunctionComponent<{
  grouppedEventsByDate: grouppedEventsByDateProps | {};
}> = ({ grouppedEventsByDate }) => {
  return (
    <Box>
      {Object.entries(grouppedEventsByDate).map(([date, events], i) => {
        const formattedDate = format(new Date(date), "EEE MMM dd yyyy");
        return (
          <Box
            key={i}
            sx={{
              borderRadius: "5px",
              padding: "10px",
              mx: "250px",
              my: "30px",
              position: "relative",
            }}
          >
            <Box
              sx={{
                color: "#0288D1",
                fontWeight: "900",
                display: "flex",
                position: "sticky",
                top: 60,
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                height: "40px",
              }}
            >
              {formattedDate}
            </Box>

            <Box
              sx={{
                paddingTop: "50px",
              }}
            >
              <Box>
                <Event events={events} />
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default EventList;
