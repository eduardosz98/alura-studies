import MyButton from "../Button";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { timeToSeconds } from "../../types/utils/time";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
    selected: ITask | undefined,
    endTask: () => void
}

export function Cronometro({ selected, endTask }: Props) {

    const [time, setTime] = useState<number>(timeToSeconds(String((selected?.time))));
    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSeconds(selected.time));
        }
    }, [selected]);

    function regressive(count: number = 0) {

        setTimeout(() => {
            if (count > 0) {
                setTime(count - 1);
                return regressive(count - 1);
            }
            endTask();
        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio time={time} />
            </div>
            <MyButton onClick={() => { regressive(time) }}>
                Começar
            </MyButton>
        </div>
    )
}
