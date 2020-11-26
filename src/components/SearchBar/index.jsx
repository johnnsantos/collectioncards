import { TextField } from "@material-ui/core";
import { BsSearch } from "react-icons/bs";
import { StyledBox } from "./styles.js";

const SearchBar = (props) => {
  return (
    <StyledBox>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          label="Pesquisar"
          onChange={props.function}
          InputProps={{
            endAdornment: <BsSearch position="end" />,
          }}
        />
      </form>
    </StyledBox>
  );
};

export default SearchBar;
