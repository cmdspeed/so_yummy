import { useEffect, useState } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Container, Content } from "./SharedLayout.styled";

export const SharedLayout = ({ children }: any) => {
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
    <Container>
      <Content>
        <Header screenSize={screenSize} />
        {children}
      </Content>
      <Footer />
    </Container>
  );
};
