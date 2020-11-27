import {
  CardActions,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
  Grid,
} from "@material-ui/core";
import { StyledIcon, StyledCard, StyledCardMedia } from "./styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useLocation } from "react-router-dom";
import Loading from "../../loading.gif";
import { message } from "antd";

const CharacterCard = ({ data, setFavorites, route }) => {
  const { pathname } = useLocation();
  const { name, image } = data;
  const id = data.id !== undefined ? data.id : "";

  const getFavorites = () => {
    const favorites =
      localStorage.getItem("favorites") !== null
        ? JSON.parse(localStorage.getItem("favorites"))
        : [];
    return favorites;
  };

  const addToFavorites = () => {
    if (
      getFavorites().find((favorite) => favorite.name === name) === undefined
    ) {
      message.success("Adicionado aos favoritos!");
      const favorites = [...getFavorites(), { id, name, image }];
      localStorage.removeItem("favorites");
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  const removeFromFavorites = () => {
    const favorites = getFavorites();
    localStorage.removeItem("favorites");
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites?.filter((favorite) => favorite.name !== name))
    );
    setFavorites(JSON.parse(localStorage.getItem("favorites")));
    message.warning("Removido dos favoritos!");
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
      <StyledCard key={id} route={route}>
        <CardHeader
          avatar={<Avatar src={image ? image : Loading}></Avatar>}
          title={name}
        />
        <StyledCardMedia image={image ? image : Loading} />
        <CardContent>
          <Typography
            variant="h6"
            color="textPrimary"
            component="p"
            style={{ textTransform: "capitalize" }}
            align="center"
          >
            {name}
          </Typography>
        </CardContent>
        {pathname === "/favorites/pokemon" ||
        pathname === "/favorites/rickandmorty" ? (
          <CardActions disableSpacing>
            <StyledIcon onClick={removeFromFavorites}>
              <HighlightOffIcon />
            </StyledIcon>
            <Typography variant="body2" color="textSecondary" component="p">
              Excluir dos Favoritos
            </Typography>
          </CardActions>
        ) : (
          <CardActions disableSpacing>
            <StyledIcon onClick={addToFavorites}>
              <FavoriteIcon />
            </StyledIcon>
            <Typography variant="body2" color="textSecondary" component="p">
              Favoritar
            </Typography>
          </CardActions>
        )}
      </StyledCard>
    </Grid>
  );
};

export default CharacterCard;
