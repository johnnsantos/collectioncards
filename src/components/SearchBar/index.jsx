import { TextField, Button } from "@material-ui/core";
import { BsSearch } from "react-icons/bs";
import { StyledBox } from "./styles.js";

const SearchBar = () => {
  return (
    <StyledBox>
      <form>
        <TextField label="Pesquisar" />
        <Button variant="contained">
          <BsSearch />
        </Button>
      </form>
    </StyledBox>
  );
};

export default SearchBar;
