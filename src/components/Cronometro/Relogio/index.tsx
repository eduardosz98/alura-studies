import style from './Relogio.module.scss';

interface Props {
    time: number | undefined,
}

export default function Relogio({ time = 0 }: Props) {
	const minutes = Math.floor(time / 60);
	const seconds = time % 60;

	const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0');
	const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0');

	return (
		<>
			<span className={style.relogioNumero}>{minutesLeft}</span>
			<span className={style.relogioNumero}>{minutesRight}</span>
			<span className={style.relogioDivisao}>:</span>
			<span className={style.relogioNumero}>{secondsLeft}</span>
			<span className={style.relogioNumero}>{secondsRight}</span>
		</>
	);
}