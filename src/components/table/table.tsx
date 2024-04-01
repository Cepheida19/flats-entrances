import { Typography } from '../ui/typography/typography'
import { EntrancesType } from '../../store/dataSlice'
import styles from './table.module.scss'

type TablePropTypes = {
    entranceData: EntrancesType[] | undefined
}

export const Table: React.FC<TablePropTypes> = ({ entranceData }) => {
    return (
        <div className={styles['wrap-table']}>
            <table>
                <tr>
                    <th>
                        <Typography
                            fontSize={'14'}
                            color={'#353D4B'}
                            lineHeight={'20'}
                            letterSpacing={'2'}>
                            Номер подъезда
                        </Typography>
                    </th>
                    <th>
                        <Typography
                            fontSize={'14'}
                            color={'#353D4B'}
                            lineHeight={'20'}
                            letterSpacing={'2'}>
                            Номер квартиры
                        </Typography>
                    </th>
                </tr>
                {entranceData?.length !== 0 ? entranceData?.map(item =>
                    <tr>
                        <td>
                            <Typography
                                fontSize={'14'}
                                color={'#353D4B'}
                                lineHeight={'20'}
                                letterSpacing={'2'}>
                                {item.number}
                            </Typography>
                        </td>
                        <td>
                            {item.flats && item.flats.map(item =>
                                <Typography
                                    fontSize={'14'}
                                    color={'#353D4B'}
                                    lineHeight={'20'}
                                    letterSpacing={'2'}>
                                    {item.replace(/[^\d]/g, '')}{' '}
                                </Typography>
                            )}
                        </td>
                    </tr>
                ) :
                    <>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                    </>
                }
            </table>
        </div>
    )
}