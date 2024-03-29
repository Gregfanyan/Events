import { map } from "lodash";
import React, { FunctionComponent } from "react";
import { eventProps } from "../types/events.types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "@mui/material/Link";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Box from "@mui/material/Box";
import { format } from "date-fns";
import "../card.css";
import { useEvents } from "../contexts/ContextWrapper";

const Event: FunctionComponent<{
  events: {
    [key: string]: eventProps;
  };
}> = ({ events }) => {
  const { handleAddToCart } = useEvents();
  return (
    <Box className="container">
      {map(events, (event) => {
        const formattedStartDate =
          event.startTime &&
          format(new Date(event.startTime), "dd MM yyyy, HH:mm:ss");
        const formattedEndDate =
          event.endTime &&
          format(new Date(event.endTime), "dd MM yyyy, HH:mm:ss");

        return (
          <Card sx={{ maxWidth: 345 }} key={event._id}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              title={
                <Box sx={{ height: "40px", overflow: "hidden" }}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      maxWidth: "200px",
                      textOverflow: "ellipsis",
                    }}
                    variant="caption"
                  >
                    {event.title}
                  </Typography>
                </Box>
              }
            />
            <CardMedia
              component="img"
              height="350"
              image={
                event.flyerFront ??
                "https://static.ra.co/images/events/flyer/2021/10/uk-1013-1471470-front.jpg?dateUpdated=1633977911437"
              }
              alt="Paella dish"
            />
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex" }}>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  href={event.venue.direction}
                  sx={{
                    cursor: "pointer",
                    objectFit: "cover",
                  }}
                  color="inherit"
                >
                  <LocationOnIcon color="info" fontSize="small" />
                </Link>
                <Typography variant="body2">
                  <>{event.venue.name}</>
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ alignSelf: "self-start" }}>
                <>
                  <>Starts: {formattedStartDate}</>
                </>
              </Typography>
              <Typography variant="caption" sx={{ alignSelf: "self-start" }}>
                <>
                  <>Ends: {formattedEndDate}</>
                </>
              </Typography>
            </CardContent>
            <CardActions
              disableSpacing
              sx={{ justifyContent: "end" }}
              onClick={() => handleAddToCart(event)}
            >
              <IconButton aria-label="add to favorites" color="info">
                <AddCircleIcon />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
};

export default Event;
