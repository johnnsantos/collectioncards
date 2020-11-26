import styled from "styled-components";
import { AppBar, Tab } from "@material-ui/core";

export const StyledAppBar = styled(AppBar)`
  margin: 0 auto;
  width: 90%;
  border-radius: 5px;
  background-color: #9c4b14;
  svg {
    font-size: 2rem;
  }
`;

export const StyledTab = styled(Tab)`
  margin: 0 5px 0;
  text-transform: capitalize;

  &:hover {
    color: #ffce46;
    background-color: #a17150;
  }

  a {
    color: inherit;
  }
`;
