const initialState = {
    todoArray: [
        {
            item: 'Buy new CPU',
            completed: false,
            id: 1
        }
    ]
}

export const reducer = (state, action) => {
    const newState = state + 1
    return newState;
}

export default initialState;