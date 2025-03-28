import {Nullable} from '@/types/util';

import styles from './SkipCard.module.css';
import classNames from 'classnames';
import {TriangleAlert} from 'lucide-react';
import SelectButton from './SelectButton';

interface NullableProps {
  id: number;
  size: number;
  hirePeriodDays: number;
  priceBeforeVat: number;
  allowedOnRoad: boolean;
}

type SkipCardProps = Nullable<NullableProps> & {
  isSelected: boolean;
  setSelectedSkipId: (id: number | null) => void;
};

export default function SkipCard(props: SkipCardProps) {
  const {size, hirePeriodDays, priceBeforeVat, allowedOnRoad, setSelectedSkipId, id, isSelected} = props;

  return (
    <div
      className={classNames(styles.container, {[styles.containerSelected]: isSelected})}
      onClick={() => setSelectedSkipId(id)}
    >
      <div className={styles.infoContainer}>
        <div>
          <h3 className={styles.title}>{size} Yard Skip</h3>
          <p className={styles.subtitle}>{hirePeriodDays} day hire period</p>
        </div>
        <p>
          <span className={styles.price}>£{priceBeforeVat}</span> <span className={styles.subtitle}>per week</span>
        </p>
      </div>
      <SelectButton isSelected={isSelected} />
      <div className={styles.imageContainer}>
        <img src='/img/containers.jpg' alt='containers photo' />
        <p className={styles.sizeBadge}>{size} Yards</p>
        {!allowedOnRoad && (
          <p className={styles.propertyBadge}>
            <TriangleAlert width={16} />
            <span>Private Property Only</span>
          </p>
        )}
      </div>
    </div>
  );
}
