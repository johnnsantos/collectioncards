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

const CharacterCard = ({ data, setFavorites }) => {
  const { name, image } = data;
  const id = data.id !== undefined ? data.id : "";

  const getFavorites = () => {
    const favorites =
      window.localStorage.getItem("favorites") !== null
        ? JSON.parse(window.localStorage.getItem("favorites"))
        : [];
    return favorites;
  };

  const handleFavorites = () => {
    if (
      getFavorites().find((favorite) => favorite.name === name) === undefined
    ) {
      const favorites = [
        ...getFavorites(),
        { id: id, name: name, image: image },
      ];
      window.localStorage.removeItem("favorites");
      window.localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  const handleRemoveFavorites = () => {
    const favorites = getFavorites();
    window.localStorage.removeItem("favorites");
    window.localStorage.setItem(
      "favorites",
      JSON.stringify(favorites?.filter((favorite) => favorite.name !== name))
    );
    setFavorites(JSON.parse(window.localStorage.getItem("favorites")));
  };

  const location = useLocation();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
      <StyledCard key={id}>
        <CardHeader avatar={<Avatar src={image}></Avatar>} title={name} />
        <StyledCardMedia image={image} />
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
        {location.pathname === "/favorites/pokemon" ||
        location.pathname === "/favorites/rickandmorty" ? (
          <CardActions disableSpacing>
            <StyledIcon onClick={handleRemoveFavorites}>
              <HighlightOffIcon />
            </StyledIcon>
            <Typography variant="body2" color="textSecondary" component="p">
              Excluir dos Favoritos
            </Typography>
          </CardActions>
        ) : (
          <CardActions disableSpacing>
            <StyledIcon onClick={handleFavorites}>
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
