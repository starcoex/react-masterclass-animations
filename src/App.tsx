import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
const Wapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: blue;
`;
const Box = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 200px;
  height: 200px;
  /* border:1px solid black; */
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.2);
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
  visible: {
    // opacity: 0,
    // scale: 0.5,
    opacity: 0,
    scale: 0.5,
  },
  invisible: {
    // opacity: 1,
    // scale: 1,
    // transition: {
    //   type: 'spring',
    //   duration: 0.5,
    //   bounce: 0.5,
    //   delayChildren: 0.5,
    //   staggerChildren: 0.5,
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const cirCleVariants = {
  visible: {
    opacity: 0,
    y: 10,
    // scale: 0,
    // y: 0,
  },
  invisible: {
    opacity: 1,
    y: 0,
    // y: 10,
    // transition: {
    //   delay: 0.5,
    // },
    // scale: 1,
    // rotateZ: 360,
    // transition: { type: 'spring', bounce: 0.8, duration: 5 },
  },
};

function App() {
  return (
    <Wapper>
      <Helmet>
        <title>ANIMATIONS</title>
      </Helmet>
      <Box variants={boxVariants} initial='visible' animate='invisible'>
        <Circle
          variants={cirCleVariants}
          // initial='visible'
          // animate='invisible'
        />
        <Circle
          variants={cirCleVariants}
          // initial='visible'
          // animate='invisible'
        />

        <Circle
          variants={cirCleVariants}
          // initial='visible'
          // animate='invisible'
        />
        <Circle
          variants={cirCleVariants}
          // initial='visible'
          // animate='invisible'
        />
      </Box>
    </Wapper>
  );
}

export default App;
