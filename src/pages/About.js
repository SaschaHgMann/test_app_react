import React from "react";
import ButtonLink from "../components/ButtonLink";
import Section from "../components/Section";
import Headline from "../components/Headline";
import Devider from "../components/Devider";
import Avatar from "../components/Avatar";

function About() {
  return (
    <Section>
      <Headline>About</Headline>
      <Devider />
      <Avatar src="/lou.jpg" width="150px" height="150px" />
      <div>
        <ButtonLink to="/">Back</ButtonLink>
      </div>
    </Section>
  );
}

export default About;
