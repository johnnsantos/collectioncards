import styled from "styled-components";

import { CardMedia, Button } from "@material-ui/core";

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

export const StyledButton = styled(Button)`
  width: 100%;
  background-color: #a17150;

  &:hover {
    color: yellow;
    background-color: #d17e47;
  }
`;
