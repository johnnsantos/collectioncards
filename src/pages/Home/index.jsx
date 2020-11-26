import { motion } from "framer-motion";
import { StyledDiv } from "./styles";
import { Carousel } from "antd";

const contentStyle = {
  width: "100%",
  maxWidth: "1920px",
  margin: "0 auto 5vh",
};

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <StyledDiv>
        <h1
          style={{ textAlign: "center", fontWeight: "bold", color: "#9b4c1e" }}
        >
          Rick e Morty + Pokemon
        </h1>
        <Carousel autoplay>
          <div>
            <img
              style={contentStyle}
              src="https://i.pinimg.com/originals/e9/7c/c3/e97cc329984a848cab048cad41cea08e.jpg"
              alt="Rick and Morty"
            />
          </div>
          <div>
            <img
              style={contentStyle}
              src="https://uhdwallpapers.org/uploads/converted/19/05/11/pokemon-detective-pikachu-1920x1080_898558-mm-90.jpg"
              alt="Pokemon"
            />
          </div>
        </Carousel>
      </StyledDiv>
    </motion.div>
  );
};

export default Home;
