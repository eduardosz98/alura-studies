import styles from './NotFound.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
	const navigate = useNavigate();
	return (
		<div className={classNames({
			[styles.container]: true,
			[stylesTheme.container]: true
		})}>
			<div className={styles.voltar}>
				<button onClick={() => { navigate(-1); }}>
					{'< Voltar'}
				</button>
			</div>
			<NotFoundImage />
		</div>
	);
}