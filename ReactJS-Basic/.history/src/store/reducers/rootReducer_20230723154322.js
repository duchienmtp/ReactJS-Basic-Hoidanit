const initState = {
  users: [
    { id: 1, name: "Eric" },
    { id: 2, name: "Hoi Dan IT" },
  ],
  post: []
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      console.log(">>> Run into delete user: ", action);
      let users = state.users;
      users = users.filter(item => item.id !== action.payload.id)
      return 
    default:
      return state;
  }
  return state;
};

export default rootReducer;