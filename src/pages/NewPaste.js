import React from "react";
import Section from "../components/Section";
import Headline from "../components/Headline";
import Devider from "../components/Devider";
import PasteForm from "../components/PasteForm";

function NewPaste({ match }) {
  return (
    <Section>
      <Headline>Paste</Headline>
      <Devider />
      <PasteForm />
    </Section>
  );
}

export default NewPaste;
