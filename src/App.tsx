import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import styles from "./styles/Styles.module.css"
import SvgStar from './components/Svgstar';

const Wapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 200vh;
  background-color: blue;
`;
const BiggerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
  width: 600px;
  height: 600px;
  /* overflow: hidden; */
`;
const Box = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 200px;
  height: 200px;
  /* border:1px solid black; */
  border-radius: 25px;
  /* background-color: rgba(255, 255, 255, 0.2); */
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  place-items: center;
  /* border: 1px solid black; */
  place-self: center;
  border-radius: 50%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  background-color: white;
`;
const boxVariants = {
  hover: {
    scale: 2,
    rotateZ: 120,
  },

  click: {
    scale: 1,
    borderRadius: '50%',
  },
};

function App() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-600, 0, 600], [2, 1, 0.1]);
  const { scrollY, scrollYProgress } = useScroll()
  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 3])
  const backgroudColor1 = useTransform(
    x,
    [-600, 0, 600],
    [
      "#12e091",
      "#10e091",
      "#12e001",
    ]
  );

  return (
    <Wapper style={{ backgroundColor: backgroudColor1 }}>
      <Helmet>
        <title >ANIMATIONS</title>
      </Helmet>
      <SvgStar />

    </Wapper>
  );
}

export default App;
