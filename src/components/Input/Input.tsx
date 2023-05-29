import { InputHTMLAttributes } from 'react';
import cls from './Input.module.css';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface InputProps<T extends FieldValues>
	extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	error?: string;
	label: Path<T>;
	register: UseFormRegister<T>;
	required: boolean;
}

export const Input = <T extends FieldValues>(props: InputProps<T>) => {
	const { className, error, register, required, label, ...inputProps } = props;

	return (
		<div className={cls.inputWrapper}>
			<input
				className={`${cls.root} ${className}`}
				{...register(label, {
					required: {
						value: required,
						message: 'Введите Имена и Фамилии гостей',
					},
				})}
				{...inputProps}
			/>
			{error && <span className={cls.error}>{error}</span>}
		</div>
	);
};
