export const deleteCard = (data) => {
  return {
    type: "DeleteCard",
    payload: data,
  };
};
