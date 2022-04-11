import items from 'data/menu-items.json';
import Item from './Item';
import styles from './Items.module.scss';
import { useState, useEffect } from 'react';
import { IMenu } from 'types/menu_item';

interface Props {
	search: string,
	filter: number | null,
	order: string
}

export default function Items(props: Props) {
	const [list, setList] = useState(items);
	const { search, filter, order } = props;

	function testSearch(title: string) {
		const regex = new RegExp(search, 'i');
		return regex.test(title);
	}

	function testFilter(id: number) {
		if (filter !== null) return filter === id;
		return true;
	}

	function orderItems(newList: IMenu) {
		switch (order) {
		case 'porcao':
			return newList.sort((a, b) => a.size > b.size ? 1 : -1);
		case 'qtd_pessoas':
			return newList.sort((a, b) => a.serving > b.serving ? 1 : -1);
		case 'preco':
			return newList.sort((a, b) => a.price > b.price ? 1 : -1);
		default:
			return newList;
		}
	}

	useEffect(() => {
		const newList = items.filter(item => testSearch(item.title) && testFilter(item.category.id));
		setList(orderItems(newList));
	}, [search, filter, order]);

	return (
		<div className={styles.itens}>
			{list.map(item => (
				<Item {...item} key={item.id} />
			))}
		</div>
	);
}