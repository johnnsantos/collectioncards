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

  const [characterList, setCharacterList] = useState([]);
  const [actualPage, setAtcualPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const setPageNumber = (data) => {
      id === "rickandmorty" && setTotalPages(data.info?.totalPages);
      id === "pokemon" && setTotalPages(Math.ceil(data.count / 20));
    };
    setPageNumber(Characters);
  }, [characterList, id]);

  useEffect(() => {
    const getCharacters = async () => {
      const URL =
        (id === "rickandmorty" &&
          `https://rickandmortyapi.com/api/character/?page=${actualPage}`) ||
        (id === "pokemon" &&
          `https://pokeapi.co/api/v2/pokemon?offset=${actualPage}&limit=20`);
      if (id === "rickandmorty" || id === "pokemon") {
        setCharacterList(await Request(URL));
      }
    };
    getCharacters();
  }, [location, actualPage, id]);

  const handleChange = (e, value) => {
    setAtcualPage(value);
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
            characterList.results?.map((character, index) => (
              <CharacterCard
                setFavorites={setFavorites}
                favorites={favorites}
                key={index}
                data={character}
              />
            ))}
          {id === "pokemon" &&
            characterList.results?.map((character, index) => (
              <CharacterCard
                setFavorites={setFavorites}
                favorites={favorites}
                key={index}
                data={{
                  ...character,
                  image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    character.url.split("/")[6]
                  }.png`,
                }}
              />
            ))}
        </Grid>
        <StyledPagination
          count={totalPages}
          page={actualPage}
          onChange={handleChange}
        />
      </StyledBox>
    </motion.div>
  );
};

export default Characters;
