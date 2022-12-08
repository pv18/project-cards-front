import {AppThunkType} from '../store';
import {setIsLoading} from './appReducer';
import {CardAPI, ChangeCardType, NewCardType} from '../../api/api';
import {setPackNameList} from './packNameReducer';

type EditModal = {
    value: boolean
    id: string
    question: string
    answer: string
    comments: string
}

type ModalsType = {
    modalDelete: boolean
    modalADD: boolean
    modalAddCard: boolean
    modalCardEditCard: EditModal
}

type ActionTypes = ReturnType<typeof changeModalDelete>
    | ReturnType<typeof changeModalADD>
    | ReturnType<typeof changeModalAddCard>
    | ReturnType<typeof changeModalEditCard>

const initialState: ModalsType = {
    modalDelete: false,
    modalADD: false,
    modalAddCard: false,
    modalCardEditCard: {value: false, id: '', question: '', comments: '', answer: ''},
};

export const modalsReducer = (state: ModalsType = initialState, action: ActionTypes): ModalsType => {
    switch (action.type) {
        case 'MODALS/CHANGE-MODAL-DELETE':
            return {...state, modalDelete: action.value};
        case 'MODALS/CHANGE-MODAL-ADD':
            return {...state, modalADD: action.value};
        case 'MODALS/CHANGE-MODAL-ADD-CARD':
            return {...state, modalAddCard: action.value};
        case 'MODALS/CARD/CHANGE-MODAL-EDIT-CARD':
            return {
                ...state, modalCardEditCard: {
                    ...state.modalCardEditCard,
                    value: action.value,
                    id: action.id,
                    question: action.question,
                    comments: action.comments,
                    answer: action.answer,
                },
            };
        default:
            return state;
    }
};


export const changeModalDelete = (value: boolean) => ({type: 'MODALS/CHANGE-MODAL-DELETE', value} as const);
export const changeModalADD = (value: boolean) => ({type: 'MODALS/CHANGE-MODAL-ADD', value} as const);
export const changeModalAddCard = (value: boolean) => ({type: 'MODALS/CHANGE-MODAL-ADD-CARD', value} as const);
export const changeModalEditCard = (value: boolean, id: string, question: string, comments: string, answer: string) => (
    {type: 'MODALS/CARD/CHANGE-MODAL-EDIT-CARD', value, id, question, comments, answer} as const);


export const addCardTC = (payload: NewCardType, cardID: string): AppThunkType => (dispatch) => {
    dispatch(setIsLoading(true))
    CardAPI.addNewCard(payload)
        .then(res => {
            CardAPI.getCards({cardsPack_id: cardID, pageCount: 10})
                .then(res => {
                    dispatch(setPackNameList(res.data.cards));
                });
        })
        .catch(err => {
        })
        .finally(() => {
            dispatch(setIsLoading(false))
        })
}



// CardAPI.changeCard(params)
//     .then(res => {
//     })
//     .catch(err => {
//     });
//
// CardAPI.getCards({cardsPack_id: props.cardID, pageCount: 10})
//     .then(res => {
//         dispatch(setPackNameList(res.data.cards));
//     });
//
// dispatch(changeModalEditCard(false, cardID, titleQuestion,'', titleAnswer ));

export const editCardTC = (payload: ChangeCardType, cardID: string): AppThunkType => (dispatch) => {
    dispatch(setIsLoading(true))
    CardAPI.changeCard(payload)
        .then(res => {
            dispatch(changeModalEditCard(false, cardID, payload.question,'', payload.answer))
            CardAPI.getCards({cardsPack_id: cardID, pageCount: 10})
                .then(res => {
                    dispatch(setPackNameList(res.data.cards));
                });
        })
        .catch(err => {
        })
        .finally(() => {
            dispatch(setIsLoading(false))
        })
}