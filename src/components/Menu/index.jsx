import {
  AppBar,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import StarIcon from "@material-ui/icons/Star";
import HomeIcon from "@material-ui/icons/Home";
import PieChartIcon from "@material-ui/icons/PieChart";
import { CgPokemon } from "react-icons/cg";
import { GiMaterialsScience } from "react-icons/gi";
import { AnimatePresence } from "framer-motion";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useState } from "react";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import Favorites from "../../pages/Favorites";
import Characters from "../../pages/Characters";
import Chart from "../../pages/Chart";

import { StyledToolbar, StyledList } from "./styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const ResponsiveDrawer = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <StyledList>
        <ListItem button component={Link} to="/" key="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/pokemon" key="/pokemon">
          <ListItemIcon>
            <CgPokemon />
          </ListItemIcon>
          <ListItemText>Pokemons</ListItemText>
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/rickandmorty"
          key="/rickandmorty"
        >
          <ListItemIcon>
            <GiMaterialsScience />
          </ListItemIcon>
          <ListItemText>Rick Morty</ListItemText>
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/favorites/pokemon"
          key="/favorites/pokemon"
        >
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText>Pokemons Favoritos</ListItemText>
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/favorites/rickandmorty"
          key="/favorites/rickandmorty"
        >
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText>Rick Morty Favoritos</ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/chart" key="/chart">
          <ListItemIcon>
            <PieChartIcon />
          </ListItemIcon>
          <ListItemText>Gráfico</ListItemText>
        </ListItem>
      </StyledList>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ textAlign: "center" }}
      >
        <StyledToolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Pokemon + Rick e Morty
          </Typography>
        </StyledToolbar>
      </AppBar>
      <BrowserRouter>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <AnimatePresence>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/chart" component={Chart} />
              <Route exact path="/drawer" component={Drawer} />
              <Route exact path="/:id" component={Characters} />
              <Route exact path="/favorites/:id" component={Favorites} />
            </Switch>
          </AnimatePresence>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default ResponsiveDrawer;
