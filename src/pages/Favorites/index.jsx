import { motion } from "framer-motion";
import { Grid } from "@material-ui/core";
import CharacterCard from "../../components/CharacterCard";
import { StyledBox } from "./styles";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Favorites = () => {
  const { type } = useParams();

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites"))
  );

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
          {type === "rickandmorty" ? (
            <>
              {favorites !== null && favorites !== [] ? (
                favorites
                  .filter((favorite) => favorite.id !== "")
                  .map((favorite, index) => (
                    <CharacterCard
                      setFavorites={setFavorites}
                      key={index}
                      data={favorite}
                    />
                  ))
              ) : (
                <h3>Sem favoritos ainda.</h3>
              )}
            </>
          ) : (
            <>
              {favorites !== null && favorites !== [] ? (
                favorites
                  .filter((favorite) => favorite.id === "")
                  .map((favorite, index) => (
                    <CharacterCard
                      setFavorites={setFavorites}
                      key={index}
                      data={favorite}
                    />
                  ))
              ) : (
                <h3>Sem favoritos ainda.</h3>
              )}
            </>
          )}
        </Grid>
      </StyledBox>
    </motion.div>
  );
};

export default Favorites;
