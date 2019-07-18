import React from "react";
import styled from "styled-components";
import Devider from "./Devider";
import Button from "./Button";
import { postPaste } from "../utils/pasteApi";
import { Redirect } from "react-router-dom";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  margin: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  margin: 10px;
`;

function PasteForm() {
  const [title, setTitle] = React.useState("");
  const [text, setText] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [paste, setPaste] = React.useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const newPaste = { title, text };
    postPaste(newPaste)
      .then(paste => {
        setPaste(paste);
      })
      .catch(error => {
        console.log(error);
      });
  }

  if (paste) {
    return <Redirect to={`/paste/${paste.id}`} />;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Gib einen Titel ein"
        value={title}
        onChange={handleTitleChange}
        required
      />
      <Devider />
      <TextArea
        rows={8}
        placeholder="Fuüge einen Text ein"
        value={text}
        onChange={handleTextChange}
      />
      <Button disabled={loading}>
        {loading ? "Loading..." : "Create Paste"}
      </Button>
    </Form>
  );
}
export default PasteForm;
