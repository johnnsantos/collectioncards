import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import FavoritePokemon from "../pages/FavoritePokemon";
import FavoriteRickAndMorty from "../pages/FavoriteRickAndMorty";
import PokemonsPage from "../pages/PokemonsPage";
import RickAndMortyPage from "../pages/RickAndMortyPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/favoritepokemon" component={FavoritePokemon} />
      <Route path="/favoriterickandmorty" component={FavoriteRickAndMorty} />
      <Route path="/pokemonspage" component={PokemonsPage} />
      <Route path="/rickandmortypage" component={RickAndMortyPage} />
    </Switch>
  );
};

export default Routes;
