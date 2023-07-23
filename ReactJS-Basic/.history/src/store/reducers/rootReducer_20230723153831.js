const initState = {
    users: [
        { id: 1, name: 'Eric' },
        { id: 2, name: 'Hoi Dan IT' }
    ]
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case '':
            break;
            
    }
    return state;
}

export default rootReducer;
