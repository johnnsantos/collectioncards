import { Tabs, Box } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { StyledAppBar, StyledTab } from "./styles.js";
import StarIcon from "@material-ui/icons/Star";
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
            icon={<CgPokemon />}
            label="Pokemons"
            component={Link}
            to="/"
            value="/"
          />
          <StyledTab
            icon={<GiMaterialsScience />}
            label="Rick Morty"
            component={Link}
            to="/rickandmortypage"
            value="/rickandmortypage"
          />
          <StyledTab
            icon={<StarIcon />}
            label="Pokemons - Favoritos"
            component={Link}
            to="/favoritepokemon"
            value="/favoritepokemon"
          />
          <StyledTab
            icon={<StarIcon />}
            label="Rick e Morty - Favoritos"
            component={Link}
            to="/favoriterickandmorty"
            value="/favoriterickandmorty"
          />
        </Tabs>
      </StyledAppBar>
    </Box>
  );
};

export default Menu;
