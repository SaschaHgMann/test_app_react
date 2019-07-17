import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import Fullscreen from "../components/Fullscreen";
import MainLogo from "../components/MainLogo";
import MainHeadline from "../components/MainHeadline";
import Section from "../components/Section";
import Devider from "../components/Devider";
import ButtonLink from "../components/ButtonLink";

function Landing() {
  return (
    <>
      <Fullscreen>
        <BackgroundImage src="https://cdn.pixabay.com/photo/2016/10/18/21/22/california-1751455_1280.jpg" />
        <MainLogo />
        <MainHeadline>BEACH</MainHeadline>
      </Fullscreen>
      <Section>
        <h2>Life´s better in Bordshorts</h2>
        <Devider />
        <p>Beach please</p>
        <ButtonLink to="/about">About me</ButtonLink>
      </Section>
    </>
  );
}

export default Landing;
