import { House } from './../components/house/house'
import { useAppSelector } from './../hook'
import styles from './main-page.module.scss'

export const MainPage: React.FC = () => {
    const houses = useAppSelector(state => state.data.houses)

    return (
        <div className={styles['container']}>
            {Array.isArray(houses) && houses.map(item =>
                <House name={item.id} data={item.entrances} />
            )}
        </div>
    )
}