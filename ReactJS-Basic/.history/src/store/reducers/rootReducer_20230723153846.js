const initState = {
    users: [
        { id: 1, name: 'Eric' },
        { id: 2, name: 'Hoi Dan IT' }
    ]
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'DELETE_USER':
            break;
        default:
            return state;    
    }
    return state;
}

export default rootReducer;
