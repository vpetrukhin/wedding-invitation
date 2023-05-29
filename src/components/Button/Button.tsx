import { ButtonHTMLAttributes, useMemo } from 'react';
import cls from './Button.module.css';

import Check from './check.svg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	isSuccess?: boolean;
	isLoading?: boolean;
}

export const Button = (props: ButtonProps) => {
	const {
		className,
		children,
		isSuccess = false,
		isLoading = false,
		...buttonProps
	} = props;

	const inputClassname = useMemo(
		() =>
			[
				cls.root,
				isSuccess && cls.success,
				isLoading && cls.loading,
				className,
			].join(' '),
		[className, isLoading, isSuccess]
	);

	return (
		<button className={inputClassname} {...buttonProps}>
			{children}
			{isSuccess && <Check />}
		</button>
	);
};
