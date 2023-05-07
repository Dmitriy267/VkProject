import React from "react";
import { useAppSelector } from "../../redux/hooks/hooks";
import styles from './Header.module.scss';


function Header (){
    const nameUser=useAppSelector(state=>state.user.user)
    return(
<header className={styles.header}>
    <div className={styles.login__div}>
        {nameUser&&<p>Здравствуй {nameUser.login}</p>}
    </div>
</header>
    )
}
export default Header;