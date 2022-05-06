import { map } from "lodash";
import React, { FunctionComponent } from "react";
import { eventProps } from "../types/events.types";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "@mui/material/Link";

const Event: FunctionComponent<{
  date: string;
  events: {
    [key: string]: eventProps;
  };
}> = ({ date, events }) => {
  return (
    <div>
      {map(events, (event) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={event._id}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              title={event.title}
            />
            <CardMedia
              component="img"
              height="194"
              image={event.flyerFront}
              alt="Paella dish"
            />
            <CardContent sx={{ display: "flex" }}>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                href={event.venue.direction}
                sx={{ cursor: "pointer" }}
                color="inherit"
              >
                <LocationOnIcon fontSize="small" />
              </Link>
              <Typography variant="body2" color="text.secondary">
                {event.venue.name}
              </Typography>
            </CardContent>
            <CardContent sx={{ display: "flex" }}>
              <LocationOnIcon fontSize="small" />
              <Typography variant="body2" color="text.secondary">
                {event.venue.name}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default Event;
