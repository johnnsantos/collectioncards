import { TextField, Button } from "@material-ui/core";
import { BsSearch } from "react-icons/bs";
import { StyledBox } from "./styles.js";

const SearchBar = (props) => {
  return (
    <StyledBox>
      <form>
        <TextField label="Pesquisar" onChange={props.function} />
        <Button variant="contained" onClick={props.function}>
          <BsSearch />
        </Button>
      </form>
    </StyledBox>
  );
};

export default SearchBar;
