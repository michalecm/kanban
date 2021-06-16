import React from "react";
import { Card, Icon, Button } from "@material-ui/core";
import TextArea from "react-textarea-autosize";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";

class TrelloActionButton extends React.Component {
  state = {
    formOpen: false,
    text: null,
  };

  openForm = () => {
    this.setState({
      formOpen: true,
    });
  };

  closeForm = () => {
    this.setState({
      formOpen: false,
    });
  };

  handleInputChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;

    if (text) {
      dispatch(addList(text));
    }

    this.setState({
      text: null,
    });

    return;
  };

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { text } = this.state;

    if (text) {
      dispatch(addCard(text, listID));
    }

    this.setState({
      text: null,
    });
  };

  handleCancelCard = () => {
    this.setState({
      text: null,
    });
    return;
  };

  renderForm = () => {
    const { list } = this.props;
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
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleInputChange}
          />
        </Card>
        <div className="addWrapper">
          <Button
            onMouseDown={list ? this.handleAddList : this.handleAddCard}
            className="textAreaCardBtn"
            backgroundColor="#5aac44"
            variant="contained"
          >
            {buttonTitle}{" "}
          </Button>
          <Icon onClick={this.handleCancelCard} className="closeBtn">
            close
          </Icon>
        </div>
      </div>
    );
  };

  renderAddButton = () => {
    const { list } = this.props;

    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherity";

    const buttonText = list ? "Add another list" : "Add another card";
    return (
      <div
        onClick={this.openForm}
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

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

export default connect()(TrelloActionButton);
