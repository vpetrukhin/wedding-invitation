import { PropsWithChildren } from 'react';
import cls from './Container.module.css';

interface ContainerProps extends PropsWithChildren {
	className?: string;
}

export const Container = (props: ContainerProps) => {
	const { className, children } = props;

	return <div className={`${cls.root} ${className}`}>{children}</div>;
};
