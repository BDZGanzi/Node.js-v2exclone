const nodeFilterReducer = (state = 'HOT', action) => {
    switch(action.actionType){
        case 'SET_NODE_FILTER':
            return action.filterType
        default:
            return state
    }
}

export const nodeFilterChange = (type) => {
    return {
        actionType: 'SET_NODE_FILTER',
        filterType: type
    }
}

export default nodeFilterReducer