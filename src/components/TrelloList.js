import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { ListWrapper } from "../util/styles";
import { Typography } from "@material-ui/core";

function TrelloList({ title, cards, listID, index }) {
  return (
    <Draggable draggableId={String(listID)} index={index}>
      {(provided) => (
        <ListWrapper //to become list container class
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={String(listID)}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <div className="listHeader">
                  <Typography variant="h4">{title}</Typography>
                </div>
                {cards.map((card, index) => (
                  <TrelloCard
                    key={card.id}
                    index={index}
                    text={card.text}
                    id={card.id}
                  />
                ))}
                {provided.placeholder}
                <TrelloActionButton listID={listID} />
              </div>
            )}
          </Droppable>
        </ListWrapper>
      )}
    </Draggable>
  );
}

export default TrelloList;
