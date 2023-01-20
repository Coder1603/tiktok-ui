import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <button className={cx('header')}>
            <FontAwesomeIcon className={cx('onBack')} onClick={onBack} icon={faChevronLeft} />
            <span className={cx('title-language')}>{title}</span>
        </button>
    );
}

export default Header;
