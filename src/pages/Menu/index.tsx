import styles from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import Searcher from './Searcher';
import Filters from './Filters';
import { useState } from 'react';
import Order from './Order';
import Items from './Items';

export default function Menu() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<number | null>(null);
    const [order, setOrder] = useState("");

    return (
        <main>
            <nav className={styles.nav}>
                <Logo />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>Code and magic</div>
            </header>
            <section className={styles.menu}>
                <h3 className={styles.menu__title}>Pesquisar</h3>
                <Searcher search={search} setSearch={setSearch} />
                <div className={styles.menu__filters}>
                    <Filters option={filter} setFilter={setFilter} />
                    <Order order={order} setOrder={setOrder} />
                </div>
                <Items />
            </section>
        </main>
    )
}