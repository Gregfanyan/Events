import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const Wrapper = styled(Box)`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;
`;

const Cart = () => {
  return (
    <Wrapper>
      <h2>Your Cart</h2>
    </Wrapper>
  );
};

export default Cart;
