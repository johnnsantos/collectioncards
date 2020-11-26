import { Tabs, Box } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { StyledAppBar, StyledTab } from "./styles.js";
import StarIcon from "@material-ui/icons/Star";
import HomeIcon from "@material-ui/icons/Home";
import { CgPokemon } from "react-icons/cg";
import { GiMaterialsScience } from "react-icons/gi";

const Menu = () => {
  const location = useLocation();

  return (
    <Box mb={5}>
      <StyledAppBar position="static">
        <Tabs
          value={location.pathname}
          variant="fullWidth"
          orientation={window.innerWidth < 600 ? "vertical" : "horizontal"}
        >
          <StyledTab
            icon={<HomeIcon />}
            label="Home"
            component={Link}
            to="/"
            value="/"
          />
          <StyledTab
            icon={<CgPokemon />}
            label="Pokemons"
            component={Link}
            to="/pokemon"
            value="/pokemon"
          />
          <StyledTab
            icon={<GiMaterialsScience />}
            label="Rick Morty"
            component={Link}
            to="/rickandmorty"
            value="/rickandmorty"
          />
          <StyledTab
            icon={<StarIcon />}
            label="Pokemons | Favoritos"
            component={Link}
            to="/favorites/pokemon"
            value="/favorites/pokemon"
          />
          <StyledTab
            icon={<StarIcon />}
            label="Rick Morty | Favoritos"
            component={Link}
            to="/favorites/rickandmorty"
            value="/favorites/rickandmorty"
          />
        </Tabs>
      </StyledAppBar>
    </Box>
  );
};

export default Menu;
