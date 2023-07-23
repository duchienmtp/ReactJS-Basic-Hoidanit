const initState = {
  users: [
    { id: 1, name: "Eric" },
    { id: 2, name: "Hoi Dan IT" },
  ],
  post: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      console.log(">>> Run into delete user: ", action);
      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        users,
      };
    case "CREATE_USER":
      let userLength = state.users.length;
      console.log(">>> Check user length: ", userLength);
      let id = state.users[userLength - 1].id + 1;
      console.log(">>> Check id: ", id);
      let user = { id, name: `Random - ${id}` };
      return { ...state, user: [...state.users, user] };
    default:
      return state;
  }
};

export default rootReducer;
