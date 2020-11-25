import { motion } from "framer-motion";
import axios from "axios";
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
import SearchBar from "../../components/SearchBar";

const PokemonsPage = (props) => {
  const [characterAPI, setCharacterAPI] = useState({
    characterList: [],
    filteredCharacters: [],
  });

  const { characterList, filteredCharacters } = characterAPI;

  const [page, setPage] = useState({
    start: 0,
    range: 20,
  });
  const { start, range } = page;

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=150").then((res) => {
      setCharacterAPI({
        characterList: [...characterList, ...res.data.results],
      });
    });
  }, [setCharacterAPI]);

  const filterCharacter = (e) => {
    let search = e.target.value;
    let setCharacterFilter = characterList.filter((character) =>
      character.name.toLowerCase().includes(search)
    );
    setCharacterAPI({
      ...characterAPI,
      filteredCharacters: setCharacterFilter,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <SearchBar function={(e) => filterCharacter(e)} />
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
          if (range <= 150) {
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
          {filteredCharacters
            ? filteredCharacters
                .slice(start, range)
                .map(({ name, url }, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Card key={index}>
                      <CardHeader
                        avatar={
                          <Avatar
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                              url.split("/")[6]
                            }.png`}
                          ></Avatar>
                        }
                        title={name}
                      />
                      <CardMedia
                        style={{
                          margin: "auto",
                          width: "150px",
                          height: "150px",
                        }}
                        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                          url.split("/")[6]
                        }.png`}
                      />
                      <CardContent>
                        <Typography
                          variant="h5"
                          color="textPrimary"
                          component="p"
                          align="center"
                        >
                          {name}
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <IconButton onClick={() => {}}>
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
            : characterList.slice(start, range).map(({ name, url }, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Card key={index}>
                    <CardHeader
                      avatar={
                        <Avatar
                          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                            url.split("/")[6]
                          }.png`}
                        ></Avatar>
                      }
                      title={name}
                    />
                    <CardMedia
                      style={{
                        margin: "auto",
                        width: "150px",
                        height: "150px",
                      }}
                      image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                        url.split("/")[6]
                      }.png`}
                    />
                    <CardContent>
                      <Typography
                        variant="h5"
                        color="textPrimary"
                        component="p"
                        align="center"
                      >
                        {name}
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton onClick={() => {}}>
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
              ))}
        </Grid>
      </StyledBox>
    </motion.div>
  );
};

export default PokemonsPage;
