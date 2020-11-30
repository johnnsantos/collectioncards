/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import { StyledBox } from "./styles";
import { useState, useEffect } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";

const Chart = () => {
  const [pokemonNumbers, setPokemonNumbers] = useState(0);
  const [rickMortyNumbers, setRickMortyNumbers] = useState(0);

  const data = {
    labels: ["Rick and Morty", "Pokemon"],
    datasets: [
      {
        data: [rickMortyNumbers, pokemonNumbers],
        backgroundColor: ["#ffa963", "#b64900", "#FFCE56"],
        hoverBackgroundColor: ["#ffa963", "#b64900", "#FFCE56"],
      },
    ],
  };

  useEffect(() => {
    const getpokemons = async () => {
      await axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => {
        setPokemonNumbers(res.data.count);
      });
    };
    const getrickmorty = async () => {
      await axios
        .get("https://rickandmortyapi.com/api/character")
        .then((res) => {
          setRickMortyNumbers(res.data.info.count);
        });
    };

    getpokemons();
    getrickmorty();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <StyledBox>
        <h2 style={{ textAlign: "center" }}>
          Relação entre número de personagens Pokemon vs Rick and Morty
        </h2>
        <Pie data={data} />
      </StyledBox>
    </motion.div>
  );
};

export default Chart;
