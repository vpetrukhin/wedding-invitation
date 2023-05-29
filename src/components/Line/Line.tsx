import cls from './Line.module.css';

interface LineProps {
	className?: string;
}

export const Line = (props: LineProps) => {
	const { className } = props;

	return <div className={`${cls.root} ${className}`} />;
};
