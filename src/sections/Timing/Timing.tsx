import { Container, Line, Text } from '../../components';
import { LinkedSection } from '../../config/const';
import cls from './Timing.module.css';

interface TimingItem {
	time: string;
	title: string;
	location: string;
}

const timingList: Array<TimingItem> = [
	{
		time: '13:30 - 14:30',
		title: 'Регистрация',
		location: 'Особняк Спиридонова',
	},
	{
		time: '16:00 - 16:30',
		title: 'Сбор гостей',
		location: 'Отель Селигерская',
	},
	{
		time: '16:30 - 22:00',
		title: 'Программа ведущего, банкет',
		location: 'Время подкрепиться и насладиться вечером',
	},
	{
		time: '22:00 - 23:00',
		title: 'Танцы ',
		location: 'Завершение нашего дня под сладкий торт',
	},
];

export const Timing = () => {
	return (
		<section id={LinkedSection.TIMING} className={cls.root}>
			<Container>
				<Text
					className={cls.title}
					text="Тайминг дня"
					type="h2"
					align="center"
				/>
				<Text
					className={cls.subtitle}
					text="Пятница , 28 июля 2023 год"
					type="h4"
					align="center"
				/>
				<Line />
				<ul className={cls.list}>
					{timingList.map(({ time, title, location }, index) => (
						<li key={index} className={cls.item}>
							<Text text={time} type="primary" color="orange" />
							<div className={cls.inner}>
								<Text text={title} />
								<Text
									className={cls.location}
									text={location}
									isSmall
									color="secondary"
								/>
							</div>
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
};
