type ModalsType = {
    modalDelete: boolean
    modalADD: boolean
    modalAddCard: boolean
}

type ActionTypes = ReturnType<typeof changeModalDelete>
    | ReturnType<typeof changeModalADD>
    | ReturnType<typeof changeModalAddCard>

const initialState: ModalsType = {
    modalDelete: false,
    modalADD: false,
    modalAddCard: false,
}

export const modalsReducer = (state: ModalsType = initialState, action: ActionTypes): ModalsType => {
    switch (action.type) {
        case 'MODALS/CHANGE-MODAL-DELETE':
            return {...state, modalDelete: action.value}
        case 'MODALS/CHANGE-MODAL-ADD':
            return {...state, modalADD: action.value}
        case 'MODALS/CHANGE-MODAL-ADD-CARD':
            return {...state,modalAddCard: action.value}
        default:
            return state
    }
}


export const changeModalDelete = (value: boolean) => ({type: 'MODALS/CHANGE-MODAL-DELETE', value} as const);
export const changeModalADD = (value: boolean) => ({type: 'MODALS/CHANGE-MODAL-ADD', value} as const);
export const changeModalAddCard = (value: boolean) => ({type: 'MODALS/CHANGE-MODAL-ADD-CARD', value} as const);