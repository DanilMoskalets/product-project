import React, {useState} from 'react'
import styles from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0);
    const inc = () => {
      setCount(count + 1)
    }

    return (
        <div>
            {count}
            <button className={styles.button} onClick={inc}>INC</button>
        </div>
    );
};

