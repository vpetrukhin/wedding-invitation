import { LinkedSection } from '../../config/const';
import { getAnchor } from '../../helpers/getAnchor';
import cls from './Menu.module.css';

interface MenuItemType {
	id: string;
	title: string;
	link: LinkedSection;
}

interface MenuProps {
	className?: string;
}

const menuItems: Array<MenuItemType> = [
	{
		id: '1',
		link: LinkedSection.TIMING,
		title: 'Тайминг дня',
	},
	{
		id: '2',
		link: LinkedSection.HOWTOREACH,
		title: 'Как добраться',
	},
];

export const Menu = (props: MenuProps) => {
	const { className } = props;

	return (
		<nav className={`${cls.root} ${className}`}>
			<ul className={cls.list}>
				{menuItems.map((item) => (
					<li key={item.id} className={cls.item}>
						<a className={cls.link} href={getAnchor(item.link)}>
							{item.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
