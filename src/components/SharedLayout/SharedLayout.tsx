import { Suspense, useEffect, useState } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Container, Content } from "./SharedLayout.styled";
import { Outlet } from "react-router";

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

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <Content>
          <Header screenSize={screenSize} />
          <Outlet />
        </Content>
        <Footer />
      </Container>
    </Suspense>
  );
};
export default SharedLayout;
