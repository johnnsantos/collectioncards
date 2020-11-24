import { motion } from "framer-motion";

const FavoriteRickAndMorty = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1>Rick e Morty Favoritos</h1>
    </motion.div>
  );
};

export default FavoriteRickAndMorty;
