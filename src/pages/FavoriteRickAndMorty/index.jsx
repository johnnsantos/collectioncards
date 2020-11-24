import { motion } from "framer-motion";
import ButtonsPagination from "../../components/ButtonsPagination";
import SearchBar from "../../components/SearchBar";

const FavoriteRickAndMorty = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <SearchBar />
      <ButtonsPagination />
      <h1>Rick e Morty Favoritos</h1>
    </motion.div>
  );
};

export default FavoriteRickAndMorty;
