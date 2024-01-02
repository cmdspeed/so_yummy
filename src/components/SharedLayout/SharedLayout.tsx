import { Suspense, useEffect, useState } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Container, Content } from "./SharedLayout.styled";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import WellcomePage from "../../pages/WellcomePage/WellcomePage";

const SharedLayout = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { user } = useAuth();
  let isUser = false;
  if (user.name === null) {
    isUser = false;
  } else {
    isUser = true;
  }
  if (isUser) {
    return (
      <Container>
        <Content>
          <Header screenSize={screenSize} />
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Content>
        <Footer />
      </Container>
    );
  } else {
    return <WellcomePage />;
  }
};
export default SharedLayout;
