import styles from './Item.module.scss';
// import logo from 'assets/logo.svg';
import items from 'data/menu-items.json';
import classNames from 'classnames';
import { IMenuItem } from 'types/menu_item';
import TagsItem from 'components/TagsItem';
import { useNavigate } from 'react-router-dom';

export default function Item(props: IMenuItem) {
	const { id, title, description, category, size, serving, price, photo } = props;
	const navigate = useNavigate();
	return (
		<div className={styles.item} onClick={() => navigate(`/item/${id}`)}>
			<div className={styles.item__imagem}>
				<img src={photo} alt={title} />
			</div>
			<div className={styles.item__descricao}>
				<div className={styles.item__titulo}>
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
				<TagsItem {...props} />
			</div>
		</div>
	);
}