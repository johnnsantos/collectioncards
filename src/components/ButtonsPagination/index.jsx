import { StyledBox } from "./styles";
import { Button } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const ButtonsPagination = () => {
  return (
    <StyledBox>
      <Button variant="contained">
        <NavigateBeforeIcon />
        Anterior
      </Button>
      <Button variant="contained">
        Próximo
        <NavigateNextIcon />
      </Button>
    </StyledBox>
  );
};

export default ButtonsPagination;
