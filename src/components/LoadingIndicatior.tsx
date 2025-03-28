import {LoaderCircle} from 'lucide-react';

import styles from './LoadingIndicator.module.css';

export default function LoadingIndicator() {
  return (
    <div className={styles.container}>
      <LoaderCircle width={36} height={36} className={styles.icon} />
    </div>
  );
}
