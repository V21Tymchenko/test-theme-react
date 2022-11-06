import Home from 'components/Home/Home';
import { Outlet } from 'react-router-dom';
export const HomePage = () => {
  return (
    <>
      <Home />
      <Outlet />
    </>
  );
};
