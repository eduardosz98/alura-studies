import styles from './Order.module.scss';
import options from './options.json';
import React, { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

type IOption = typeof options[0];

interface Props {
    order: string,
    setOrder: React.Dispatch<React.SetStateAction<string>>
}

export default function Order({ order, setOrder }: Props) {
    const [open, setOpen] = useState(false);
    const nameOrder = order && options.find(option => option.value === order)?.nome;
    return (
        <button
            onClick={(() => setOpen(!open))}
            onBlur={() => setOpen(false)}
            className={classNames({
                [styles.order]: true,
                [styles["order--ativo"]]: order !== ""
            })}>

            <span>{nameOrder || "Ordernar Por"}</span>
            {open ? < MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
            <div className={classNames({
                [styles.order__options]: true,
                [styles["order__options--ativo"]]: open
            })}>
                {options.map(option => (
                    <div className={styles.order__option} key={option.value}
                        onClick={() => setOrder(option.value)}>
                        {option.nome}
                    </div>
                ))}
            </div>
        </button>
    )
}