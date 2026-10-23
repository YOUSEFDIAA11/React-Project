import Container from './Components/Container/Container';
import CustomCard from './Components/Card/Card';
import Features from './Components/Features/Features';

const Home = () => {
  return (
    <div>
      <Container>
        <CustomCard />
        <Features />
      </Container>
    </div>
  );
};

export default Home;
