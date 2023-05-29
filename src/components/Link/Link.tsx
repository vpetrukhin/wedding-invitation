import {
	AnchorHTMLAttributes,
	DetailedHTMLProps,
	PropsWithChildren,
} from 'react';
import cls from './Link.module.css';

interface LinkProps
	extends DetailedHTMLProps<
		AnchorHTMLAttributes<HTMLAnchorElement>,
		HTMLAnchorElement
	> {
	className?: string;
	type?: 'button' | 'link';
}

export const Link = (props: PropsWithChildren<LinkProps>) => {
	const { className, children, type = 'button', ...otherProps } = props;

	return (
		<a className={`${cls.root} ${cls[type]} ${className}`} {...otherProps}>
			{children}
		</a>
	);
};
