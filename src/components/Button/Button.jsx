import { Link } from 'react-router-dom';
import styles from './Button.module.css';

// variant: 'primary' | 'outline' | 'whatsapp'
const Button = ({ to, href, variant = 'primary', size, className = '', children, ...rest }) => {
  const classes = [styles.btn, styles[variant], size === 'sm' ? styles.sm : '', className].join(' ');

  if (to) {
    return <Link to={to} className={classes} {...rest}>{children}</Link>;
  }
  return (
    <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
};

export default Button;
