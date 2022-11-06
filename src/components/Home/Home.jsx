import { ListHome, LinkNone, HomeHeader } from './Home.styled';

const Home = () => {
  return (
    <HomeHeader>
      <nav>
        <ListHome>
          <li>
            <LinkNone to="/">Home</LinkNone>
          </li>
          <li>
            <LinkNone to="/fetchApi">FetchApi</LinkNone>
          </li>
          <li>
            <LinkNone to="/counter">Counter</LinkNone>
          </li>
        </ListHome>
      </nav>
    </HomeHeader>
  );
};

export default Home;
