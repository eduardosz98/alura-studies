import menuItems from 'data/menu-items.json';
import styles from './Home.module.scss';
// import MainMenu from 'components/Menu';
import stylesTheme from 'styles/Theme.module.scss';
import nossaCasa from 'assets/img/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { IMenuItem } from 'types/menu_item';

export default function Home() {
	let recomendedItems = [...menuItems];
	recomendedItems = recomendedItems.sort(() => 0.5 - Math.random()).splice(0, 3);
	const navigate = useNavigate();

	function redirectToDetails(item: IMenuItem) {
		navigate(`/item/${item.id}`, { state: { ...item } });
	}

	return (
		<section>
			<h3 className={stylesTheme.titulo}>Recomendações</h3>
			<div className={styles.recomendados}>
				{recomendedItems.map(item => (
					<div key={item.id} className={styles.recomendado}>
						<div className={styles.recomendado__imagem}>
							<img src={item.photo} alt={item.title} />
						</div>
						<button className={styles.recomendado__botao}
							onClick={() => redirectToDetails(item)}>
							Ver Mais
						</button>
					</div>
				))}
			</div>
			<h3 className={stylesTheme.titulo}>Nossa casa</h3>
			<div className={styles.nossaCasa}>
				<img src={nossaCasa} alt="Casa do aluroni" />
				<div className={styles.nossaCasa__endereco}>
					Rua das Américas <br /><br />Vila Mariana - SP
				</div>
			</div>
		</section>
	);
}