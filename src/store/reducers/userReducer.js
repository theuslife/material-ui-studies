const inital_state = {
    name: 'Matheus',
    lastName: 'Silva'
}

export default (state = inital_state, action) => {
    switch (action.type) {
        case 'CHANGE_USER':
            return action.payload
        default:
            return state
    }
}