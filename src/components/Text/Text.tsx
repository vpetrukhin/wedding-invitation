import cls from './Text.module.css';

type TextType = 'primary' | 'h1' | 'h2' | 'h3' | 'h4';
type TextAlign = 'left' | 'center' | 'right';
type TextColor = 'primary' | 'secondary' | 'white' | 'orange';

interface TextProps {
	className?: string;
	text: string;
	type?: TextType;
	align?: TextAlign;
	color?: TextColor;
	isSmall?: boolean;
}

export const Text = (props: TextProps) => {
	const {
		className,
		text,
		type = 'primary',
		align = 'left',
		color = 'primary',
		isSmall,
	} = props;

	const renderText = (type: TextType) => {
		const defaultClassName = [
			cls.root,
			className,
			cls[align],
			cls[color],
			isSmall && cls.small,
		].join(' ');

		switch (type) {
			case 'primary':
				return <p className={`${defaultClassName} ${cls.primary}`}>{text}</p>;
			case 'h1':
				return <h1 className={`${defaultClassName} ${cls.h1}`}>{text}</h1>;
			case 'h2':
				return <h2 className={`${defaultClassName} ${cls.h2}`}>{text}</h2>;
			case 'h3':
				return <h3 className={`${defaultClassName} ${cls.h3}`}>{text}</h3>;
			case 'h4':
				return <h4 className={`${defaultClassName} ${cls.h4}`}>{text}</h4>;

			default:
				return <p className={`${defaultClassName} ${cls.primary}`}>{text}</p>;
		}
	};

	return renderText(type);
};
