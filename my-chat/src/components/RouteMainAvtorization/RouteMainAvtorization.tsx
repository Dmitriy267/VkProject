import React from "react";
import styles from './RouteMainAvtorization.module.scss';
import User from '../../image/avtorization/user.svg';
import password from '../../image/avtorization/password.svg';
import {Link} from 'react-router-dom';
import {ButtonEnterAvtorization} from '../common/ButtonEnterAvtorization/ButtonEnterAvtorization';
const  RouteMainAvtorization =()=>{
    return (
     <section className={styles.avtorization__section}>
     <form className={styles.avtorization__form}>
    <p className={styles.form__p_bold}>Авторизация</p>
    <p className={styles.form__p}>Авторизируйтесь, чтобы начать <br/>общаться с другими участниками</p>
    <input type="text" className={styles.avtorization__input} placeholder="Логин"  required/>
    <img src={User} alt="Иконка пользователя" className={styles.avtorization__img} />
    <input type="password" className={styles.password__input} placeholder="Пароль" required/>
    <img src={password} alt="Иконка пароля" className={styles.password__img}/>
   
<ButtonEnterAvtorization>
Войти
</ButtonEnterAvtorization>
<p className={styles.text__p}>Еще нет аккаунта? <Link to="/Регистрация">Регистрация</Link></p>
</form>
</section>

    )
}

export {RouteMainAvtorization}