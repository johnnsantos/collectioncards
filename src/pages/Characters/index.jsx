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
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    const getCharacterList = async () => {
      const URL =
        (id === "rickandmorty" &&
          `https://rickandmortyapi.com/api/character/?page=${page}`) ||
        (id === "pokemon" &&
          `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`);
      if (id === "rickandmorty" || id === "pokemon") {
        setCharacterList(await Request(URL));
      }
    };
    getCharacterList();
  }, [location, page]);

  useEffect(() => {
    const getTotalPages = (data) => {
      id === "rickandmorty" && setTotalPages(data.info?.pages);
      id === "pokemon" && setTotalPages(Math.ceil(data.count / 20));
    };
    getTotalPages(characterList);
  }, [characterList]);

  const handleChange = (e, value) => {
    setPage(value);
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
      </StyledBox>
      <StyledPagination
        count={totalPages}
        page={page}
        onChange={handleChange}
      />
    </motion.div>
  );
};

export default Characters;
