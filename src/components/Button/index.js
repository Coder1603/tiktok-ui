import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ primary, upload, onClick, to, href, children, leftIcon, menu, rightIcon, ...passProps }) {
    let Tag = 'button';
    const props = { onClick, ...passProps };

    if (to) {
        props.to = to;
        Tag = Link;
    } else if (href) {
        props.href = href;
        Tag = 'a';
    }

    const classes = cx('wrapper', { primary, upload, menu });

    return (
        <Tag className={classes} {...props}>
            {leftIcon && <span className={cx('icon', 'left-icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon', 'right-icon')}>{rightIcon}</span>}
        </Tag>
    );
}

export default Button;
