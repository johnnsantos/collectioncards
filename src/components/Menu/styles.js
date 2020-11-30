import styled from "styled-components";
import { Toolbar, List } from "@material-ui/core";

export const StyledList = styled(List)`
  svg {
    font-size: 2rem;
  }

  a:hover {
    color: #a17150;
  }
`;

export const StyledToolbar = styled(Toolbar)`
  color: white;
  /* background-color: #a17050; */
  background-size: auto;
  background-image: url("https://i.pinimg.com/600x315/83/5b/22/835b22fcaaa97a063cca993be8384529.jpg");
  background-image: linear-gradient(
      to bottom,
      rgba(31, 15, 0, 0.6) 0%,
      rgba(29, 24, 0, 0.6) 100%
    ),
    url("https://i.pinimg.com/600x315/83/5b/22/835b22fcaaa97a063cca993be8384529.jpg");

  h6 {
    color: white;
  }
`;
