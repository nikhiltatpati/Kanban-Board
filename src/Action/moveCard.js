export const moveCard = (id, status) => {
  return {
    type: "MoveCard",
    payload: [id, status],
  };
};
