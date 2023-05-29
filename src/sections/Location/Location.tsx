import { Map, Placemark } from '@pbe/react-yandex-maps';
import { Container, Link, Text } from '../../components';
import { LinkedSection } from '../../config/const';
import cls from './Location.module.css';

export const Location = () => {
	return (
		<section id={LinkedSection.HOWTOREACH} className={cls.root}>
			<Container>
				<Text
					className={cls.title}
					type="h2"
					text="Место проведения торжества"
					align="center"
				/>
				<Text
					className={cls.subtitle}
					text="Банкетный зал Елисейские поля на территории отеля Селигерская"
					align="center"
				/>
				<div className={cls.content}>
					<div className={cls.inner}>
						<Text text="Как добраться?" type="h3" />
						<Text
							className={cls.address}
							text="Москва, Коровинское ш, 10
                        Отель Селигерская"
							type="primary"
						/>
					</div>
					<Map
						defaultState={{
							center: [55.87093860159802, 37.53537777909849],
							zoom: 15,
						}}
						width={659}
						height={400}
						className={cls.map}
					>
						<Placemark geometry={[55.87090844018779, 37.53533486375426]} />
					</Map>
				</div>
				<Link
					className={cls.link}
					href="https://yandex.ru/maps/org/otel_seligerskaya/1867560286/?display-text=%D0%BE%D1%82%D0%B5%D0%BB%D1%8C%20%D1%81%D0%B5%D0%BB%D0%B8%D0%B3%D0%B5%D1%80%D1%81%D0%BA%D0%B0%D1%8F&ll=37.543901%2C55.867278&mode=search&sll=37.617700%2C55.755863&sspn=1.642456%2C0.661366&text=%D0%BE%D1%82%D0%B5%D0%BB%D1%8C%20%D1%81%D0%B5%D0%BB%D0%B8%D0%B3%D0%B5%D1%80%D1%81%D0%BA%D0%B0%D1%8F&z=14"
					target="_blank"
				>
					Открыть карту
				</Link>
			</Container>
		</section>
	);
};
