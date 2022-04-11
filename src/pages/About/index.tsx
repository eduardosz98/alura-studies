import styles from './About.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import casa from 'assets/img/casa.png';
import massa1 from 'assets/img/massa1.png';
import massa2 from 'assets/img/massa2.png';

const images = [massa1, massa2];
export default function About() {
	return (
		<section>
			<h3 className={stylesTheme.titulo}>Sobre</h3>
			<div className={styles.sobreNos}>
				<img src={casa} alt="Casa Aluroni" />
				<div className={styles.sobreNos__texto}>
					<p>
						Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
					</p>
					<p>
						Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
					</p>
					<p>
						Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
					</p>
				</div>
			</div>
			<div className={styles.imagens}>
				{images.map((image, index) => (
					<div key={index} className={styles.imagens__imagem}>
						<img src={image} alt="imagem de massa" />
					</div>
				))}
			</div>
		</section>
	);
}