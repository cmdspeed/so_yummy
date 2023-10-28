import React, { useState, useEffect } from "react";
import AuthNav from "../../components/AuthNav/AuthNav";
import { Logo } from "../../components/Logo/Logo";
import { Container, Heading1, Paragraph } from "./WellcomePage.styled";

const WellcomePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <main>
      <Container>
        {windowWidth < 768 ? (
          <Logo width="54" height="54" />
        ) : (
          <Logo width="68" height="68" />
        )}
        <Heading1>Welcome to the app!</Heading1>
        <Paragraph>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </Paragraph>
        <AuthNav />
      </Container>
    </main>
  );
};

export default WellcomePage;
