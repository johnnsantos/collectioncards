import styled from "styled-components";
import { Box } from "@material-ui/core";

export const StyledBox = styled(Box)`
  form {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    margin: 2vh auto 2vh;

    button {
      margin: 15px 0 0 5px;
    }
  }
`;
