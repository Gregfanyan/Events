import { styled } from "@mui/material/styles";
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
const Wrapper = styled(Box)`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;
`;

const Cart = () => {
  const { cartItems } = useEvents();
  return (
    <Wrapper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {map(cartItems, (event) => {
          console.log("event", event);
          const formattedStartDate =
            event.startTime &&
            format(new Date(event.startTime), "dd MM yyyy, HH:mm:ss");
          const formattedEndDate =
            event.endTime &&
            format(new Date(event.endTime), "dd MM yyyy, HH:mm:ss");

          return (
            <Card sx={{ width: 345 }} key={event._id}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                title={
                  <Typography
                    sx={{
                      height: "45px",
                      overflow: "auto",
                      fontWeight: "bold",
                    }}
                    variant="caption"
                  >
                    {event.title}
                  </Typography>
                }
              />
              <CardMedia
                component="img"
                height="194"
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
            </Card>
          );
        })}
      </Box>
    </Wrapper>
  );
};

export default Cart;
