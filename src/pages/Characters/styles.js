import styled from "styled-components";
import { Box } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

export const StyledBox = styled(Box)`
  margin: 5vh auto;
  width: 90%;
`;

export const StyledPagination = styled(Pagination)`
  margin: 5vh auto;
  padding-bottom: 5vh;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
