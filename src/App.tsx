import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Drawer from "@mui/material/Drawer";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Cart from "./components/Cart";
import { useEvents } from "./contexts/ContextWrapper";
import EventList from "./components/EventList";
import useFilteredAndSortedEvents from "./hooks/useEventSearchAndSortFilter";
import Search from "./components/Search";
import { filter, groupBy, some } from "lodash";
import UKFlagIcon from "./components/UKFlagIcon";
import { Typography } from "@mui/material";
import { dateFormat } from "./hooks/useDateFormat";

const Wrapper = styled(Box)`
  margin: 40px;
`;

const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 10px;
  width: "auto";
`;

export default function App() {
  const [cartOpen, setCartOpen] = React.useState(false);
  const {
    onChangeHadler,
    title,
    sortButtonHandleClick,
    cartItems,
    getTotalItems,
    isLoading,
  } = useEvents();
  const [filteredEvents] = useFilteredAndSortedEvents(title);

  const filteredEventWithoutCart = filter(filteredEvents, (e) => {
    return !some(cartItems, (item) => e._id === item._id);
  });

  const grouppedEventsByDate = groupBy(filteredEventWithoutCart, "date");

  const eventDateArr = Object.keys(grouppedEventsByDate).map((date) =>
    Date.parse(date)
  );
  const maxDate = new Date(Math.max(...eventDateArr));
  const minDate = new Date(Math.min(...eventDateArr));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Search onChangeHadler={onChangeHadler} title={title} />
          <IconButton
            sx={{ zIndex: 100, marginRight: "30px" }}
            onClick={sortButtonHandleClick}
          >
            <FilterAltIcon sx={{ color: "#fff" }} />
          </IconButton>
          <Box sx={{ display: { xs: "flex" } }}>
            <StyledButton onClick={() => setCartOpen(true)}>
              <Badge badgeContent={getTotalItems()} color="error">
                <AddShoppingCartIcon sx={{ color: "#fff" }} />
              </Badge>
            </StyledButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          ml: "382px",
          marginTop: "75px",
        }}
      >
        <Box sx={{ display: "flex", gap: "10px", height: "26px" }}>
          <Box
            sx={{
              display: "flex",
              borderRadius: "50px",
              border: "1px solid #ccc",
              width: "100px",
              justifyContent: "center",
              gap: "5px",
              textTransform: "uppercase",
              alignItems: "center",
            }}
          >
            <UKFlagIcon
              width={22}
              style={{
                borderRadius: "50px",
                height: "auto",
              }}
            />
            <Typography variant="body2" fontWeight="600">
              London
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              borderRadius: "50px",
              border: "1px solid #ccc",
              width: "180px",
              justifyContent: "center",
              gap: "5px",
              alignItems: "center",
            }}
          >
            {!isLoading ? (
              <Typography variant="body2" fontWeight="600">
                <>
                  {dateFormat(minDate)}- {dateFormat(maxDate)}
                </>
              </Typography>
            ) : (
              ""
            )}
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "50px",
            display: "flex",
            fontWeight: "900",
            fontSize: "30px",
          }}
        >
          Public Events
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <EventList
          grouppedEventsByDate={
            grouppedEventsByDate ? grouppedEventsByDate : {}
          }
        />
      </Box>
      <Wrapper>
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <Cart />
        </Drawer>
      </Wrapper>
    </Box>
  );
}
