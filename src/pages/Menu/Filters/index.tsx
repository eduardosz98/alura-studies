import classNames from 'classnames';
import filters from './filters.json';
import styles from './Filters.module.scss';

type IOption = typeof filters[0];

// interface IOption {
//     id: number,
//     label: string
// }

interface Props {
    option: number | null,
    setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filters({ option, setFilter }: Props) {

    function selectFilter(filter: IOption) {
        if (filter.id === option) return setFilter(null);
        return setFilter(filter.id);
    }

    return (
        <div className={styles.filters}>
            {filters.map((filter) => (
                <button
                    key={filter.id}
                    className={classNames({
                        [styles.filters__option]: true,
                        [styles["filters__option--ativo"]]: filter.id === option
                    })}
                    onClick={() => selectFilter(filter)}>{filter.label}</button>
            ))}
        </div >
    )
}