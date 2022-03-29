import styles from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import Searcher from './Searcher';
import { useState } from 'react';

export default function Menu() {
    const [search, setSearch] = useState("");
    return (
        <main>
            <nav className={styles.nav}>
                <Logo />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>Code and magic</div>
            </header>
            <section className={styles.menu}>
                <h3 className={styles.menu__title}>Conteúdo</h3>
                <Searcher search={search} setSearch={setSearch} />
            </section>
        </main>
    )
}