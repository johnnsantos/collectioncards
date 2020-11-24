import { motion } from "framer-motion";

const PokemonsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1>Página de Pokemons</h1>
    </motion.div>
  );
};

export default PokemonsPage;
