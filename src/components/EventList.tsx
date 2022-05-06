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
    <Box sx={{ marginTop: "100px" }}>
      {Object.entries(grouppedEventsByDate).map(([date, events], i) => {
        const formattedDate = format(new Date(date), "EEE MMM dd yyyy");
        return (
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
              mx: "250px",
              my: "30px",
            }}
          >
            {formattedDate}

            <Box
              key={i}
              sx={{
                paddingTop: "50px",
              }}
            >
              <Box>
                <Event date={formattedDate} events={events} />
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default EventList;
