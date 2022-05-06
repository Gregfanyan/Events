import { styled } from "@mui/material/styles";
import { filter, map } from "lodash";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { format } from "date-fns";
import "../card.css";
import { useEvents } from "../contexts/ContextWrapper";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
const Wrapper = styled(Box)`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;
`;

const Cart = () => {
  const { cartItems, setCartItems } = useEvents();
  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev: any) => {
      return filter(prev, (item) => item._id !== id);
    });
  };
  return (
    <Wrapper>
      {cartItems.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px 2px",
          }}
        >
          {map(cartItems, (event) => {
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
                  <Typography
                    variant="caption"
                    sx={{ alignSelf: "self-start" }}
                  >
                    <>
                      <>Starts: {formattedStartDate}</>
                    </>
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ alignSelf: "self-start" }}
                  >
                    <>
                      <>Ends: {formattedEndDate}</>
                    </>
                  </Typography>
                  <CardActions disableSpacing sx={{ justifyContent: "end" }}>
                    <IconButton
                      aria-label="add to favorites"
                      color="error"
                      onClick={() => handleRemoveFromCart(event._id)}
                    >
                      <RemoveCircleIcon />
                    </IconButton>
                  </CardActions>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          No events in cart
        </Box>
      )}
    </Wrapper>
  );
};

export default Cart;
