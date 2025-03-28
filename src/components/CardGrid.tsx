import {ReactNode} from 'react';

import styles from './CardGrid.module.css';

interface CardGridProps {
  children?: ReactNode;
}
export default function CardGrid(props: CardGridProps) {
  return (
    <>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Choose Your Skip Size</h2>
        <p className={styles.subtitle}>Select the skip size that best suits your needs</p>
      </div>
      <div className={styles.cardGrid}>{props.children}</div>
    </>
  );
}
