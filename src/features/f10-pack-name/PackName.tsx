import React, {useState} from 'react';

import {useNavigate, useParams} from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';

import Arrow from '../../assets/img/arrow-left.svg';

import {TablePackNameContainer} from '../f2-packName/TablePackNameContainer';

import {TableSearch} from '../f7-tableSearch/TableSearch';
import {apiCard} from '../f2-packName/api/api';
import {CardPackNameType, setPackNameList} from '../f2-packName/api/bll/packNameReducer';
import {AppDispatch, AppRootStateType} from '../../store/store';
import {Button} from '../../components/c5-Button/Button';

import {NavBarContainer} from '../f6-navbar/NavBarContainer';

import {setIsLoading} from '../../store/reducers/appReducer';

import s from './PackName.module.scss';
import {Modal} from '../../components/c6-modal/Modal';
import {ModalAddCard} from './modals/addModalCard/ModalAddCard';
import {changeModalAddCard} from '../../store/reducers/modalsReducer';

export const PackName = () => {
    const [search, setSearch] = useState<string>('');
    const isModal = useSelector<AppRootStateType, boolean>(state => state.modals.modalAddCard)
    const navigate = useNavigate();
    const {name, packId, pageCount} = useParams();
    const dispatch = useDispatch()
    const cards = useSelector<AppRootStateType, CardPackNameType[]>(state => state.packName.cards);
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);

    //const dispatch = AppDispatch()

    useEffect(() => {
        if (packId && pageCount) {
            //dispatch(getCards(packId, +pageCount))
            apiCard.getCards({cardsPack_id: packId, pageCount: +pageCount})
                .then(res => {
                    dispatch(setPackNameList(res.data.cards));
                });
        }
    }, []);

    const getFilteredCardsAfterSearch = search === ''
        ? cards
        : cards.filter(c => c.question.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
            <NavBarContainer/>
            <div className={s.table}>
                <h2 className={s.title}>
                    <img onClick={() => navigate(-1)} src={Arrow} alt="arrow left"/>
                    <span>Pack Name "{name}"</span>
                </h2>
                <div className={s.search}>
                    <TableSearch title={search}
                                 changeTitle={setSearch}
                                 isLoading={isLoading}/>
                    <div className={s.buttonWrap}>
                        <Button width={'200px'}
                                onClick={() => dispatch(changeModalAddCard(true))}
                        >
                            Add new question
                        </Button>
                        <Button width={'200px'}
                                disabled={isLoading}
                        >Add new question</Button>
                    </div>
                </div>
                <TablePackNameContainer filterTitle={search}/>
            </div>
            <Modal visibility={isModal}>
                <ModalAddCard cardID={packId}/>
            </Modal>
        </div>
    );
};

