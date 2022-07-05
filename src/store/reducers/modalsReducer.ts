type ModalsType = {
    modalDelete: boolean
    modalADD: boolean
}

type ActionTypes = ReturnType<typeof changeModalDelete> | ReturnType<typeof changeModalADD>

const initialState: ModalsType = {
    modalDelete: false,
    modalADD: false
}

export const modalsReducer = (state: ModalsType = initialState, action: ActionTypes): ModalsType => {
    switch (action.type) {
        case 'MODALS/CHANGE-MODAL-DELETE':
            return {...state, modalDelete: action.value}
        case 'MODALS/CHANGE-MODAL-ADD':
            return {...state, modalADD: action.value}
        default:
            return state
    }
}


export const changeModalDelete = (value: boolean) => ({type: 'MODALS/CHANGE-MODAL-DELETE', value} as const);

export const changeModalADD = (value: boolean) => ({type: 'MODALS/CHANGE-MODAL-ADD', value} as const);