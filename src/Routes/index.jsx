import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import FavoritePokemon from "../pages/FavoritePokemon";
import FavoriteRickAndMorty from "../pages/FavoriteRickAndMorty";
import PokemonsPage from "../pages/PokemonsPage";
import RickAndMortyPage from "../pages/RickAndMortyPage";
import SearchBar from "../components/SearchBar";
import Menu from "../components/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";

const Routes = () => {
  return (
    // <AnimatePresence>
    <>
      <CssBaseline />
      <Menu />
      <SearchBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favoritepokemon" component={FavoritePokemon} />
        <Route path="/favoriterickandmorty" component={FavoriteRickAndMorty} />
        <Route path="/pokemonspage" component={PokemonsPage} />
        <Route path="/rickandmortypage" component={RickAndMortyPage} />
      </Switch>
    </>
    // </AnimatePresence>
  );
};

export default Routes;
