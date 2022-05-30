import {ChangeEvent} from 'react';

import {useSelector} from 'react-redux';

import {TextField} from '../../Textfield/TextField';

import {Button} from '../../Button/Button';

import SuperCheckbox from '../../c3-SuperCheckbox/SuperCheckbox';

import {AppRootStateType} from '../../../store/store';

import s from './login.module.scss';

type LoginPropsType = {
	email: string
	password: string
	activeBtn: boolean
	rememberMe: boolean
	onChangeHandlerEmail: (e: ChangeEvent<HTMLInputElement>) => void
	onChangeHandlerPassword: (e: ChangeEvent<HTMLInputElement>) => void
	onChangeChecked: (e: ChangeEvent<HTMLInputElement>) => void
	onSubmitHandler: () => void
	redirectLink: () => void
}

export const Login = (props: LoginPropsType) => {

	const error = useSelector<AppRootStateType, string | undefined>(state => state.login.error);



	return (
		<section className={s.login}>
			<h2 className={s.login__logo}>It-incubator</h2>
			<form className={s.form}>
				<h3 className={s.form__title}>Sign In</h3>

				<div className={s.form__group}>
					{/*<span className={s.form__label}>Email</span>*/}
					{/*<input autoFocus={true} className={s.form__input} type={'email'}/>*/}

					{/*добавить в TextField type email*/}
					<TextField onChange={props.onChangeHandlerEmail} value={props.email} type={'text'}/>
				</div>


				<div className={s.form__group}>
					{/*<span className={s.form__label}>Password</span>*/}
					{/*<input className={s.form__input} type={'password'}/>*/}
					{/*<img className={s.form__img} width={'22px'} src={'shape'} alt={'shape'}/>*/}

					<TextField onChange={props.onChangeHandlerPassword} value={props.password} type={'password'}/>
				</div>

				<SuperCheckbox onChange={props.onChangeChecked} checked={props.rememberMe}>
					remember Me
				</SuperCheckbox>

				<div className={s.form__forgot}>
					<span onClick={props.redirectLink}>Forgot Password</span>
				</div>

				{/*показываем ошибку если отправка api не удалась*/}
				<span className={s.form__errorMessage}>{error}</span>

				<div className={s.form__buttonWrap}>
					<Button
						disabled={props.activeBtn}
						onClick={props.onSubmitHandler}>
						Login
					</Button>
					{/*<button className={s.form__button} type={'submit'}>Login</button>*/}
				</div>

			</form>

			<div className={s.login__quest}>
				Don’t have an account?
			</div>

			<div className={s.login__subTitle}>Sign Up</div>
		</section>
	);
};