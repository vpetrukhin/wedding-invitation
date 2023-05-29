import { Text } from '../../components';
import cls from './Footer.module.css';

export const Footer = () => {
	return (
		<footer className={cls.root}>
			<Text text="Мы будем счастливы видеть Вас !" type="h3" align="center" />
			<Text text="С любовью, Евгений и Елена " align="center" />
		</footer>
	);
};
