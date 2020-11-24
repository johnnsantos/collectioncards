import { Switch, Route } from "react-router-dom";
import FavoritePokemon from "../pages/FavoritePokemon";
import FavoriteRickAndMorty from "../pages/FavoriteRickAndMorty";
import PokemonsPage from "../pages/PokemonsPage";
import RickAndMortyPage from "../pages/RickAndMortyPage";
import Menu from "../components/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";
import SearchBar from "../components/SearchBar";
import ButtonsPagination from "../components/ButtonsPagination";

const Routes = () => {
  return (
    <>
      <CssBaseline />
      <Menu />
      <SearchBar />
      <ButtonsPagination />
      <Switch>
        <Route path="/favoritepokemon" component={FavoritePokemon} />
        <Route path="/favoriterickandmorty" component={FavoriteRickAndMorty} />
        <Route exact path="/" component={PokemonsPage} />
        <Route path="/rickandmortypage" component={RickAndMortyPage} />
      </Switch>
    </>
  );
};

export default Routes;
