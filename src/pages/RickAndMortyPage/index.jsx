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

const RickAndMortyPage = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => {
        setData(res.data.results);
      });
  }, [setData, page]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <ButtonsPagination
        prev={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        }}
        next={() => {
          if (page < 35) {
            setPage(page + 1);
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
          {data.map(({ name, image, species }, index) => (
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
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {name}, {species}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Favoritar
                    </Typography>
                    <FavoriteIcon />
                  </IconButton>
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
