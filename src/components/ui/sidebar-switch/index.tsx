import { cn } from '@/libs/utils';

import styles from './sidebar-switch.module.css';

type TSidebarSwitch = {
  isOpen: boolean;
  onToggle: () => void;
};

const SidebarSwitch = ({ isOpen, onToggle }: TSidebarSwitch) => {
  return (
    <div className={styles.toggleContainer}>
      <input
        type="checkbox"
        id="sidebar-toggle"
        checked={isOpen}
        onChange={onToggle}
        className={styles.checkbox}
      />
      <label
        htmlFor="sidebar-toggle"
        className={cn(styles.toggle, isOpen ? styles.checked : '')}
      >
        <div className={cn(styles.bars, styles.bar1)}></div>
        <div className={cn(styles.bars, styles.bar2)}></div>
        <div className={cn(styles.bars, styles.bar3)}></div>
      </label>
    </div>
  );
};

export default SidebarSwitch;
