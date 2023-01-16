import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ primary, upload, onClick, to, href, children, ...passProps }) {
    let Tag = 'button';
    const props = { onClick, ...passProps };

    if (to) {
        props.to = to;
        Tag = Link;
    } else if (href) {
        props.href = href;
        Tag = 'a';
    }

    return (
        <Tag className={cx('wrapper', { primary, upload })} {...props}>
            <span>{children}</span>
        </Tag>
    );
}

export default Button;
