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

const RickAndMortyPage = (props) => {
  const [characterAPI, setCharacterAPI] = useState({
    characterList: [],
    nextUrl: "https://rickandmortyapi.com/api/character/",
    filteredCharacters: [],
  });

  const { characterList, nextUrl, filteredCharacters } = characterAPI;

  const getCharacters = () => {
    if (nextUrl) {
      axios.get(nextUrl).then((res) => {
        setCharacterAPI({
          characterList: [...characterList, ...res.data.results],
          nextUrl: res.data.info.next,
        });
      });
    }
  };

  const [page, setPage] = useState({
    start: 0,
    range: 20,
  });
  const { start, range } = page;

  useEffect(getCharacters, [characterList, nextUrl]);

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
          {filteredCharacters
            ? filteredCharacters
                .slice(start, range)
                .map(({ name, image, species }, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Card key={index}>
                      <CardHeader
                        avatar={<Avatar src={image}></Avatar>}
                        title={name}
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
                        image={image}
                      />
                      <CardContent>
                        <Typography
                          variant="h6"
                          color="textPrimary"
                          component="p"
                          style={{ textTransform: "capitalize" }}
                          align="center"
                        >
                          {name}, {species}
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
            : characterList
                .slice(start, range)
                .map(({ name, image, species }, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Card key={index}>
                      <CardHeader
                        avatar={<Avatar src={image}></Avatar>}
                        title={name}
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
                        image={image}
                      />
                      <CardContent>
                        <Typography
                          variant="h6"
                          color="textPrimary"
                          component="p"
                          style={{ textTransform: "capitalize" }}
                          align="center"
                        >
                          {name}, {species}
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

export default RickAndMortyPage;
