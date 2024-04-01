import { useState } from 'react'
import { ReactComponent as DeleteIcon } from './../../icons/icon-trash.svg'
import { ReactComponent as PlusIcon } from './../../icons/icon-plus.svg'
import { Table } from './../table/table'
import { Button } from './../ui/button/button'
import { Typography } from './../ui/typography/typography'
import { ModalEntrances } from '../modal-entrances/modal-entrances'
import { EntrancesType, removeEntrance } from '../../store/dataSlice'
import { useAppDispatch } from '../../hook'
import { entranceArray } from '../../dataFromBackend'
import styles from './house.module.scss'

type HousePropTypes = {
    name: string | undefined
    data?: EntrancesType[]
}

export const House: React.FC<HousePropTypes> = ({ name, data }) => {
    const [modalEntrancesIsOpen, setModalEntrancesIsOpen] = useState(false)
    const dispatch = useAppDispatch()

    return (
        <div className={styles['container-house']}>
            <div className={styles['head-house']}>
                <div className={styles['name-slot']}>
                    <Typography
                        fontSize={'20'}
                        color={'#353D4B'}
                        lineHeight={'28'}
                        letterSpacing={'2'}>
                        Дом {name}
                    </Typography>
                </div>
                <div className={styles['buttons-slot']}>
                    <Button variant={'small'} onClick={() => dispatch(removeEntrance({ id: name }))}><DeleteIcon /></Button>
                    <Button variant={'small'} onClick={() => setModalEntrancesIsOpen(true)}><PlusIcon /></Button>
                    <ModalEntrances
                        title={'Номер подъезда'}
                        list={entranceArray}
                        houseNumber={name}
                        isOpen={modalEntrancesIsOpen}
                        onClose={() => setModalEntrancesIsOpen(false)} />
                </div>

            </div>
            <div className={styles['body-house']}>
                <Table entranceData={data} />
            </div>
        </div>
    )
}