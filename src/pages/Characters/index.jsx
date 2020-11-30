/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import { useLocation, useParams } from "react-router-dom";
import CharacterCard from "../../components/CharacterCard";
import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { StyledBox, StyledPagination } from "./styles";
import axios from "axios";

const Characters = ({ setFavorites, favorites }) => {
  const { id } = useParams();
  const location = useLocation();
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  const GET = async (endpoint) => {
    let res = await axios.get(endpoint);
    return res.data;
  };

  useEffect(() => {
    const getCharacterList = async () => {
      if (id === "rickandmorty") {
        setCharacterList(
          await GET(`https://rickandmortyapi.com/api/character/?page=${page}`)
        );
      } else if (id === "pokemon") {
        setCharacterList(
          await GET(
            page === 1
              ? `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20`
              : `https://pokeapi.co/api/v2/pokemon/?offset=2${
                  page - 1
                }0&limit=20`
          )
        );
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
                route={id}
                setFavorites={setFavorites}
                favorites={favorites}
                key={index}
                data={character}
              />
            ))}
          {id === "pokemon" &&
            characterList.results?.map((character, index) => (
              <CharacterCard
                route={id}
                setFavorites={setFavorites}
                favorites={favorites}
                key={index}
                data={{
                  ...character,
                  image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
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
        onChange={(e, value) => {
          setPage(value);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </motion.div>
  );
};

export default Characters;
