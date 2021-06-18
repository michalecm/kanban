import { CONSTANTS } from "../actions";
import { createAction } from "@reduxjs/toolkit";

export const addCard = createAction(CONSTANTS.ADD_CARD);

// export const addCard = (text, listID) => {
//   return {
//     type: CONSTANTS.ADD_CARD,
//     payload: { text, listID },
//   };
// };
