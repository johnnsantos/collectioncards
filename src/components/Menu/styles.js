import styled from "styled-components";
import { AppBar, Tab } from "@material-ui/core";

export const StyledAppBar = styled(AppBar)`
  background-color: #9c4b14;
  svg {
    font-size: 1.5rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const StyledTab = styled(Tab)`
  margin: 0 5px 0;
  text-transform: capitalize;

  &:hover {
    background-color: #a17150;
  }
`;
