import styled from "styled-components";
import { IconButton, Card, CardMedia } from "@material-ui/core";

export const StyledIcon = styled(IconButton)`
  &:hover {
    color: red;
  }
`;

export const StyledCard = styled(Card)`
  cursor: cell;
  background-color: #fff8ea;

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
  filter: grayscale(0.7);
  opacity: 0.9;

  &:hover {
    filter: grayscale(0);
    opacity: 1;
    padding-left: 83%;
    padding-top: 83%;
    transition: all 0.5s ease-in-out;
  }
`;
