import { Form, Text } from '../../components';
import cls from './Confirmation.module.css';

export const Confirmation = () => {
	return (
		<section className={cls.root}>
			<Text
				className={cls.title}
				text="Пожалуйста, подтвердите присутствие"
				type="h2"
				align="center"
			/>
			<Form />
		</section>
	);
};
