import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";
import { CardContainer } from "../util/styles";

function TrelloCard({ text, id, index }) {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <CardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className="trelloCard">
            <CardContent>
              <Typography gutterBottom>{text}</Typography>
            </CardContent>
          </Card>
        </CardContainer>
      )}
    </Draggable>
  );
}

export default TrelloCard;
