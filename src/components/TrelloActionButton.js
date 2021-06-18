import React, { useState } from "react";
import { Card, Icon, Button } from "@material-ui/core";
import TextArea from "react-textarea-autosize";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";

function TrelloActionButton(props) {
  const [formOpen, setFormOpen] = useState(false);
  const [text, setText] = useState("");

  const openForm = () => {
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddList = () => {
    const { dispatch } = props;

    if (text) {
      dispatch(addList(text));
    }

    setText("");

    return;
  };

  const handleAddCard = () => {
    const { dispatch, listID } = props;

    if (text) {
      dispatch(addCard(text, listID));
    }

    setText("");
  };

  const handleCancelCard = () => {
    setText("");
  };

  const renderForm = () => {
    const { list } = props;
    const placeHolder = list
      ? "Enter list title"
      : "Enter a title for this card";
    const buttonTitle = list ? "Add list" : "Add card";
    return (
      <div>
        <Card className="textAreaCard">
          <TextArea
            className="textArea"
            placeholder={placeHolder}
            autoFocus
            onBlur={closeForm}
            value={text}
            onChange={handleInputChange}
          />
        </Card>
        <div className="addWrapper">
          <Button
            onMouseDown={list ? handleAddList : handleAddCard}
            className="textAreaCardBtn"
            backgroundColor="#5aac44"
            variant="contained"
          >
            {buttonTitle}{" "}
          </Button>
          <Icon onClick={handleCancelCard} className="closeBtn">
            close
          </Icon>
        </div>
      </div>
    );
  };

  const renderAddButton = () => {
    const { list } = props;

    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherity";

    const buttonText = list ? "Add another list" : "Add another card";
    return (
      <div
        onClick={openForm}
        style={{
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
        }}
        className="trelloBtn"
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };

  return formOpen ? renderForm() : renderAddButton();
}

export default connect()(TrelloActionButton);
