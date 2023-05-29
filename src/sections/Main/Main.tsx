import cls from './Main.module.css';

import { Menu, Text } from '../../components';

export const Main = () => {
	return (
		<header className={cls.root}>
			<Menu />
			<div className={cls.inner}>
				<Text text="Evgeny & Elena" type="h1" color="white" />
				<Text text="28/07/2023" type="h3" color="white" />
			</div>
		</header>
	);
};
