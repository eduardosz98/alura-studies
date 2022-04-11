import styles from './MenuItem.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import menuItems from 'data/menu-items.json';
import TagsItem from 'components/TagsItem';
import NotFound from 'pages/NotFound';
import DefaultPage from 'components/DefaultPage';

export default function MenuItem() {
	const { id } = useParams();
	const navigate = useNavigate();
	const item = menuItems.find(menuItem => menuItem.id === Number(id));
	if (!item) {
		return <NotFound />;
	}
	return (
		<DefaultPage>
			<button className={styles.voltar} onClick={() => navigate(-1)}>
				{'< Voltar'}
			</button>
			<section className={styles.container}>
				<h1 className={styles.titulo}>
					{item.title}
				</h1>
				<div className={styles.imagem}>
					<img src={item.photo} alt={item.title} />
				</div>
				<div className={styles.conteudo}>
					<p className={styles.conteudo__descricao}>{item.description}</p>
					<TagsItem {...item} />
				</div>
			</section>
		</DefaultPage>
	);
}