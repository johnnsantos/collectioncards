import { motion } from "framer-motion";
import {
  CardActions,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
  Grid,
  Button,
  Card,
} from "@material-ui/core";
import { StyledCardMedia } from "./styles";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        spacing={2}
      >
        <Grid item xs={12} sm={6} md={6} lg={6} key={"1"}>
          <Card key={"1"}>
            <CardHeader
              avatar={
                <Avatar src="https://img.redbull.com/images/c_fill,g_auto,w_790,h_527/q_auto,f_auto/redbullcom/2016/09/20/1331818966444_2/pok%C3%A9mon-super-mystery-dungeon"></Avatar>
              }
              title="Pokemons"
            />
            <StyledCardMedia image="https://img.redbull.com/images/c_fill,g_auto,w_790,h_527/q_auto,f_auto/redbullcom/2016/09/20/1331818966444_2/pok%C3%A9mon-super-mystery-dungeon" />
            <CardContent>
              <Typography
                variant="h6"
                color="textPrimary"
                component="p"
                style={{ textTransform: "capitalize" }}
                align="center"
              >
                Pokemons
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/pokemon"
              >
                Ir para pokemons
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} key={"2"}>
          <Card key={"2"}>
            <CardHeader
              avatar={
                <Avatar src="https://ze-robot.com/images/source/319.jpg"></Avatar>
              }
              title="Rick and Morty"
            />
            <StyledCardMedia image="https://ze-robot.com/images/source/319.jpg" />
            <CardContent>
              <Typography
                variant="h6"
                color="textPrimary"
                component="p"
                style={{ textTransform: "capitalize" }}
                align="center"
              >
                Rick and Morty
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/rickandmorty"
              >
                Ir para Rick and Morty
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Home;

// https://i.pinimg.com/originals/e9/7c/c3/e97cc329984a848cab048cad41cea08e.jpg

// https://uhdwallpapers.org/uploads/converted/19/05/11/pokemon-detective-pikachu-1920x1080_898558-mm-90.jpg
