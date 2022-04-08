import items from './items.json';
import Item from './Item';
import styles from './Items.module.scss';

type IItem = typeof items[0];

export default function Items() {
    return (
        <div className={styles.itens}>
            {items.map(item => (
                <Item {...item} key={item.id} />
            ))}
        </div>
    )
}