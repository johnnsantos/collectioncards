import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";

const RickAndMortyPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/?page=1")
      .then((res) => {
        console.log(res);
      });
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    ></motion.div>
  );
};

export default RickAndMortyPage;
