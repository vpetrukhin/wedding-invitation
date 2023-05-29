import cls from './Form.module.css';

import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { RadioButton } from '../RadioButton/RadioButton';
import { Button, Input, Text } from '..';

interface FormFields {
	state: 'Я приду один' | 'Я с семьей / парой' | 'Не смогу прийти';
	guests: string;
}

const {
	VITE_EMAILJS_SERVICE_ID,
	VITE_EMAILJS_TEMPLATE_ID,
	VITE_EMAILJS_PUBLIC_KEY,
} = import.meta.env;

export const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormFields>();

	const [success, setSuccess] = useState(false);
	const [sending, setSending] = useState(false);

	const formRef = useRef<HTMLFormElement>(null);

	const handleFormChange = () => {
		setSuccess(false);
	};

	const onSubmit = () => {
		setSending(true);
		emailjs
			.sendForm(
				VITE_EMAILJS_SERVICE_ID,
				VITE_EMAILJS_TEMPLATE_ID,
				formRef.current || '',
				VITE_EMAILJS_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
					setSuccess(true);
					setSending(false);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	const renderButtonText = () => {
		if (sending) {
			return 'Идет отправка...';
		}

		if (success) {
			return 'Ответ отправлен';
		}

		return 'Отправить';
	};

	return (
		<form
			className={cls.root}
			ref={formRef}
			onChange={handleFormChange}
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className={cls.radiobuttons}>
				<RadioButton<FormFields>
					id="single"
					value="Я приду один"
					text="Я приду один"
					register={register}
					label="state"
					required
				/>
				<RadioButton<FormFields>
					id="notSingle"
					value="Я с семьей / парой"
					text="Я с семьей / парой"
					register={register}
					label="state"
					required
				/>
				<RadioButton<FormFields>
					id="notCan"
					text="Не смогу прийти"
					value="Не смогу прийти"
					register={register}
					label="state"
					error={errors.state?.message}
					required
				/>
			</div>
			<Text
				className={cls.subtitle}
				text="Введите имена и фамилии гостей"
				type="h4"
				align="center"
			/>
			<Input<FormFields>
				label="guests"
				required
				register={register}
				className={cls.guests}
				error={errors.guests?.message}
				id="guests"
				name="guests"
			/>
			<Button type="submit" isSuccess={success} isLoading={sending}>
				{renderButtonText()}
			</Button>
		</form>
	);
};
