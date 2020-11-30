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
  background-color: #a17050;

  h6 {
    color: white;
  }
`;
