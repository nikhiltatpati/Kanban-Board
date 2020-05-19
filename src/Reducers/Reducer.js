export function reducer(state = [], action) {
  switch (action.type) {
    case "AddCard":
      return [action.payload, ...state];
    case "DeleteCard":
      return state.filter((item) => item.id !== action.payload);
    case "MoveCard":
      const [id, status] = action.payload;
      return state.map(function (item) {
        if (item.id === id) {
          if (item.status === "todo") {
            return (item.status = "progress");
          }
          if (item.status === "progress") {
            return (item.status = "complete");
          }
        }
        return item;
      });

    default:
      return state;
  }
}
