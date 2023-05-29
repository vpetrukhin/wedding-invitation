import { InputHTMLAttributes } from 'react';
import cls from './RadioButton.module.css';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface RadioButtonProps<T extends FieldValues>
	extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	key?: string;
	error?: string;
	text: string;
	label: Path<T>;
	register: UseFormRegister<T>;
	required: boolean;
}

export const RadioButton = <T extends FieldValues>(
	props: RadioButtonProps<T>
) => {
	const {
		className,
		label,
		id,
		key = null,
		register,
		required,
		error,
		text,
		...otherProps
	} = props;

	return (
		<div className={`${cls.wrapper} ${className}`} key={key}>
			<input
				className={cls.radio}
				type="radio"
				id={id}
				{...register(label, {
					required: {
						message: 'Выберите один из вариантов',
						value: required,
					},
				})}
				{...otherProps}
			/>
			<label className={cls.label} htmlFor={id}>
				{text}
				{error && <span className={cls.error}>{error}</span>}
			</label>
		</div>
	);
};
