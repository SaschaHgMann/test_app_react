import React from "react";
import NotFound from "./NotFound";
import Section from "../components/Section";
import Headline from "../components/Headline";
import Devider from "../components/Devider";
import ButtonLink from "../components/ButtonLink";
import { getPaste } from "../utils/pasteApi";

function PasteDetails({ match }) {
  const { id } = match.params;
  const [paste, setPaste] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getPaste(id)
      .then(paste => {
        setPaste(paste);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  });

  if (!loading && !paste) {
    return <NotFound />;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Section>
      <Headline>Logbuch</Headline>
      <Devider />
      <div>{paste.title}</div>
      <div>{paste.text}</div>
      <div>
        <ButtonLink to="/">Back</ButtonLink>
      </div>
    </Section>
  );
}

export default PasteDetails;
