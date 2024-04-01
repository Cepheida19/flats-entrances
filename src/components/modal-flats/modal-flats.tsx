import { useState } from 'react'
import { Button } from '../ui/button/button'
import { Typography } from '../ui/typography/typography'
import { ReactComponent as CloseIcon } from './../../icons/icon-close.svg'
import { useAppDispatch } from '../../hook'
import { addEntrance, EntrancesType } from '../../store/dataSlice'
import styles from './modal-flats.module.scss'

type ModalPropsType = {
    isOpen: boolean
    onClose: () => void
    onCloseEntrances?: () => void
    title?: string
    houseNumber?: string
    activeElement?: EntrancesType | null
}

export const ModalFlats: React.FC<ModalPropsType> = ({ isOpen, onClose, onCloseEntrances, title, houseNumber, activeElement }) => {
    const [severalActiveFlats, setSeveralActiveFlats] = useState<string[]>([])
    const dispatch = useAppDispatch()

    const setActiveFlats = (item: string) => {
        setSeveralActiveFlats(prevState => [...prevState as any, item])
    }

    const closeModalFlats = () => {
        setSeveralActiveFlats([])
        onClose()
    }

    const handleAddButton = () => {
        const deleteDublesFlat = Array.from(new Set(severalActiveFlats))
        dispatch(addEntrance({ id: houseNumber, data: { number: activeElement?.number?.replace(/[^\d]/g, ''), flats: deleteDublesFlat } }))
        onClose()
        onCloseEntrances && onCloseEntrances()
    }

    return (
        <>
            {isOpen && (
                <div className={styles['modal']}>
                    <div className={styles['modal-wrapper']}>
                        <div className={styles['modal-header']}>
                            <Typography
                                fontSize={'14'}
                                color={'#FFFFFF'}
                                lineHeight={'20'}
                                letterSpacing={'2'}>
                                {title}
                            </Typography>
                            <Button onClick={closeModalFlats} variant={'small'} className={styles['modal-close-button']}>
                                <CloseIcon />
                            </Button>
                        </div>
                        <div className={styles['modal-body']}>
                            {activeElement && activeElement?.flats?.map(item =>
                                <Button
                                    onClick={() => setActiveFlats(item)}
                                    isActive={severalActiveFlats.some(x => x === item)}
                                    variant={'list'}>
                                    {item}
                                </Button>
                            )}
                        </div>
                        <div>
                            <Button
                                onClick={handleAddButton}
                                className={styles['add-button']}
                                variant={'standart'}>
                                Добавить
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}