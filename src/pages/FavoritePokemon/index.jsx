import { motion } from "framer-motion";
import ButtonsPagination from "../../components/ButtonsPagination";

const FavoritePokemon = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <ButtonsPagination />
      <h1>Pokemons Favoritos</h1>
    </motion.div>
  );
};

export default FavoritePokemon;
