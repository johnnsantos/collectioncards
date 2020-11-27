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
      return `url("https://i.pinimg.com/originals/e1/1a/a3/e11aa37a17e7fc010243dc7b830ec028.jpg");`;
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
      rgba(255, 243, 176, 0.986) 0%,
      rgba(255, 209, 109, 0.8) 100%
    ),
    url("https://i.pinimg.com/originals/e1/1a/a3/e11aa37a17e7fc010243dc7b830ec028.jpg");`;
    }
  }};

  cursor: pointer;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    box-shadow: 1px 1px 15px #ffc551;
  }
`;

export const StyledCardMedia = styled(CardMedia)`
  border-radius: 10px;
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
