import styled from "styled-components";
import { IconButton, Card, CardMedia } from "@material-ui/core";

export const StyledIcon = styled(IconButton)`
  &:hover {
    color: red;
  }
`;

export const StyledCard = styled(Card)`
  background-image: ${(props) => {
    if (props.route === "pokemon") {
      return `url("https://i.pinimg.com/originals/95/cc/e0/95cce097b0febec31f67ecc2f574830f.jpg");`;
    } else {
      return `url("https://image.freepik.com/free-vector/space-galaxy-cosmic-card_24908-31258.jpg");`;
    }
  }};

  background-image: ${(props) => {
    if (props.route === "pokemon") {
      return `linear-gradient(
      to bottom,
      rgba(249, 255, 159, 0.8) 0%,
      rgba(255, 240, 217, 0.8) 100%
    ),
    url("https://i.pinimg.com/originals/95/cc/e0/95cce097b0febec31f67ecc2f574830f.jpg");`;
    } else {
      return `linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(248, 172, 255, 0.8) 100%
    ),
    url("https://image.freepik.com/free-vector/space-galaxy-cosmic-card_24908-31258.jpg");`;
    }
  }};

  cursor: pointer;
  background-color: #fff8ea;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    box-shadow: 1px 1px 15px #ffc551;
  }
`;

export const StyledCardMedia = styled(CardMedia)`
  height: 40px;
  margin: auto;
  padding-left: 80%;
  padding-top: 80%;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: grayscale(0.3);

  &:hover {
    filter: grayscale(0);
    padding-left: 83%;
    padding-top: 83%;
    transition: all 0.5s ease-in-out;
  }
`;
