import {MoveRight} from 'lucide-react';

import styles from './SelectButton.module.css';
import classNames from 'classnames';

interface SelectButtonProps {
  isSelected: boolean;
}

export default function SelectButton({isSelected}: SelectButtonProps) {
  return (
    <button type='button' className={classNames(styles.container, {[styles.containerSelected]: isSelected})}>
      {isSelected ? (
        'Selected'
      ) : (
        <>
          Select this Skip <MoveRight />
        </>
      )}
    </button>
  );
}
