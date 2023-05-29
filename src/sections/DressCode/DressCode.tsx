import { Link, Text } from '../../components';
import cls from './DressCode.module.css';

export const DressCode = () => {
	return (
		<section className={cls.root}>
			<Text className={cls.title} text="Dress Code" type="h2" align="center" />
			<Link
				href="https://www.yapokupayu.ru/blogs/post/dress-kod-cocktail"
				type="link"
				target="_blank"
			>
				Cocktail
			</Link>
		</section>
	);
};
