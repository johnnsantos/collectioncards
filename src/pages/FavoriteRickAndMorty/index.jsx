import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { StyledBox } from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
  IconButton,
  Avatar,
  Grid,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ButtonsPagination from "../../components/ButtonsPagination";

const FavoriteRickAndMorty = () => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favoritesrickmorty"));
    setCharacterList([...characterList, data]);
  }, []);

  const [page, setPage] = useState({
    start: 0,
    range: 20,
  });
  const { start, range } = page;

  console.log(characterList);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <ButtonsPagination
        prev={() => {
          if (start > 0) {
            setPage({
              start: start - 20,
              range: range - 20,
            });
          }
        }}
        next={() => {
          if (range <= 671) {
            setPage({
              start: start + 20,
              range: range + 20,
            });
          }
        }}
      />
      <StyledBox>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          spacing={2}
        >
          {characterList ? (
            characterList.slice(start, range).map((character, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card key={index}>
                  <CardHeader
                    avatar={<Avatar src={character.image}></Avatar>}
                    title={character.name}
                  />
                  <CardMedia
                    style={{
                      height: "40px",
                      margin: "auto",
                      paddingLeft: "80%",
                      paddingTop: "80%",
                      width: "30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    image={character.image}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      component="p"
                      style={{ textTransform: "capitalize" }}
                      align="center"
                    >
                      {character.name}, {character.species}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton>
                      <FavoriteIcon />
                    </IconButton>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Favoritar
                    </Typography>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <h1>Sem favoritos</h1>
          )}
        </Grid>
      </StyledBox>
    </motion.div>
  );
};

export default FavoriteRickAndMorty;
