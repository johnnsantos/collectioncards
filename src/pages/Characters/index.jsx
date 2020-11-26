/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import { useLocation, useParams } from "react-router-dom";
import { Request } from "../../Request";
import CharacterCard from "../../components/CharacterCard";
import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { StyledBox, StyledPagination } from "./styles";

const Characters = ({ setFavorites, favorites }) => {
  const { id } = useParams();
  const location = useLocation();

  const [RickAndPokemonCharacters, setCharactersRickAndMorty] = useState([]);

  const [page, setPage] = useState(1);
  const [numberPages, setNumberPages] = useState();

  const defineNumberpages = (data) => {
    id === "rickandmorty" && setNumberPages(data.info?.pages);
    id === "pokemon" && setNumberPages(Math.ceil(data.count / 20));
  };

  const handleChange = (_e, value) => {
    setPage(value);
  };

  const LoadCharacters = async () => {
    const URL =
      (id === "rickandmorty" &&
        `https://rickandmortyapi.com/api/character/?page=${page}`) ||
      (id === "pokemon" &&
        `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`);
    if (id === "rickandmorty" || id === "pokemon") {
      setCharactersRickAndMorty(await Request(URL));
    }
  };

  useEffect(() => {
    LoadCharacters();
  }, [location, page]);

  useEffect(() => {
    defineNumberpages(RickAndPokemonCharacters);
  }, [RickAndPokemonCharacters]);

  const { results } = RickAndPokemonCharacters;

  const urlPoke = (poke) => {
    const brokenUrl = poke.url.split("/");
    const idPoke = brokenUrl[brokenUrl.length - 2];
    return idPoke;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <StyledBox>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          spacing={2}
        >
          {id === "rickandmorty" &&
            results?.map((character, index) => (
              <CharacterCard
                setFavorites={setFavorites}
                favorites={favorites}
                key={index}
                data={character}
              />
            ))}
          {id === "pokemon" &&
            results?.map((character, index) => (
              <CharacterCard
                setFavorites={setFavorites}
                favorites={favorites}
                key={index}
                data={{
                  ...character,
                  image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${urlPoke(
                    character
                  )}.png`,
                }}
              />
            ))}
        </Grid>
        <StyledPagination
          count={numberPages}
          page={page}
          onChange={handleChange}
        />
      </StyledBox>
    </motion.div>
  );
};

export default Characters;
