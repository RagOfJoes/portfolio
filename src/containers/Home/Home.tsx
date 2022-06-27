import { Container } from '@chakra-ui/react';

import Header from '@/components/Header';

import Contact from './Contact';
import Experience from './Experience';
import Intro from './Intro';
import Projects from './Projects';

const Home = () => {
  return (
    <>
      <Header />
      <Container px="6" pb="40px" as="main" centerContent maxW="container.xl">
        <Intro />
        <Experience />
        <Projects />
        <Contact />
      </Container>
    </>
  );
};

export default Home;
