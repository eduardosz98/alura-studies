import Searcher from './Searcher';
import Filters from './Filters';
import { useState } from 'react';
import Order from './Order';
import Items from './Items';
import styles from './Menu.module.scss';
import stylesTheme from 'styles/Theme.module.scss';

export default function Menu() {
	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState<number | null>(null);
	const [order, setOrder] = useState('');

	return (
		<section className={styles.menu}>
			<h3 className={stylesTheme.titulo}>Pesquisar</h3>
			<Searcher search={search} setSearch={setSearch} />
			<div className={styles.menu__filters}>
				<Filters option={filter} setFilter={setFilter} />
				<Order order={order} setOrder={setOrder} />
			</div>
			<Items search={search} filter={filter} order={order} />
		</section>
	);
}