import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/f0ddf05770a5b5a0b8a0d98fc17b27ee~c5_300x300.webp?x-expires=1673852400&x-signature=ONzUkUuQv%2BsJ4s6nMtDxAvka9A4%3D"
                alt=""
            />
            <div className={'info'}>
                <span className={cx('user-block')}>
                    <h5 className={cx('user')}>user123</h5>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                </span>
                <p className={cx('name')}>Võ Công Đức</p>
            </div>
        </div>
    );
}

export default AccountItem;
