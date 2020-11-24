import { StyledBox } from "./styles";
import { Button } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const ButtonsPagination = (props) => {
  return (
    <StyledBox>
      <Button variant="contained" onClick={props.prev}>
        <NavigateBeforeIcon />
        Anterior
      </Button>
      <Button variant="contained" onClick={props.next}>
        Próximo
        <NavigateNextIcon />
      </Button>
    </StyledBox>
  );
};

export default ButtonsPagination;
