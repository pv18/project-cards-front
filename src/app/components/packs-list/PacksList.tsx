import React, {useState} from 'react';

import {TablePacksContainer} from '../tablePack/TablePacksContainer';
import PaginationContainer from '../Pagination/PaginationContainer';

import MyAll from '../my-all/MyAll';
import {Modal} from '../Modal/Modal';
import {NavBarContainer} from '../navbar/NavBarContainer';
import {Button} from '../Button/Button';

import s from './PacksList.module.scss';
import {ModalDelete} from './modals/deleteModal/ModalDelete';
import {ModalAdd} from './modals/addModal/ModalAdd';

export const PacksList = () => {
    const [isDelete, setDelete] = useState<boolean>(false);
    const [isADD, setADD] = useState<boolean>(false);
    return (
        <div className={s.wrapper}>
            <NavBarContainer/>
            <div className={s.table}>
                <div className={s.leftBar}>
                    <h4 className={s.title}>Show packs cards</h4>
                    <MyAll/>
                    <h4 className={s.title}>Number of cards</h4>
                    // Нужно потом УДАЛИТЬ!!!
                    <div style={{
                        height: '100px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}>
                        <Button onClick={() => setDelete(true)}>Delete Pack</Button>
                        <Button onClick={() => setADD(true)}>Add new pack</Button>
                    </div>
                </div>
                <div className={s.main}>
                    <h2 className={s.title}>Packs list</h2>
                    <TablePacksContainer/>
                    <PaginationContainer/>
                </div>
            </div>
            <Modal visibility={isDelete} changeVisibility={setDelete}>
                <ModalDelete/>
            </Modal>
            <Modal visibility={isADD} changeVisibility={setADD}>
                <ModalAdd/>
            </Modal>
        </div>
    );
};

