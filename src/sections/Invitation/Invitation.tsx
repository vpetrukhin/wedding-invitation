import cls from './Invitation.module.css';

import { Container } from '../../components/Container/Container';
import { Text } from '../../components';

export const Invitation = () => {
	return (
		<section className={cls.root}>
			<Container>
				<Text
					className={cls.title}
					text="Дорогие гости !"
					type="h2"
					align="center"
				/>
				<div className={cls.subtitle}>
					<Text
						text="Наша безграничная любовь дала повод собрать родных и близких вместе!"
						align="center"
					/>
					<Text text="Будем рады видеть вас на нашей свадьбе" align="center" />
				</div>

				<div className={cls.imgwrapper} />
			</Container>
		</section>
	);
};
