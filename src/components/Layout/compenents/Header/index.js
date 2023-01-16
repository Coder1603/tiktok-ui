import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { useState } from 'react';
import AccountItem from '~/components/AccountItem';
import Button from '../Button';

const cx = classNames.bind(styles);

function Header() {
    const [searchResults, setSearchResults] = useState([]);

    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/">
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <Tippy
                    interactive
                    visible={visible}
                    onClickOutside={hide}
                    zIndex={9999}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Tài khoản</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                    delay={0}
                >
                    <div className={cx('search')}>
                        <div className={cx('input-block')}>
                            <input
                                onFocus={searchResults.length === 0 ? hide : show}
                                type="text"
                                spellCheck={false}
                                placeholder="Tìm kiếm tài khoản và video"
                            />
                            <button className={cx('status')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                                {/* <FontAwesomeIcon icon={faSpinner} /> */}
                            </button>
                        </div>
                        <span className={cx('vertical-tile')}></span>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action-block')}>
                    <Button upload>
                        <FontAwesomeIcon className={cx('icon-upload')} icon={faPlus} />
                        <span>Tải lên</span>
                    </Button>
                    <Button primary onClick={() => alert('Thành công')}>
                        {' '}
                        Đăng nhập{' '}
                    </Button>
                    <div className={cx('more')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>
                    {/* <div className={cx('messenger')}>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </div>
                    <div className={cx('mailbox')}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className={cx('user')}>
                        <img
                            src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/87e002726dfc96526d3b0d2f58486cc5.jpeg?x-expires=1673463600&x-signature=9HRjUjwXxvNEqxW%2B2%2F9j%2FljgUKE%3D)"
                            alt=""
                        />
                    </div> */}
                </div>
            </div>{' '}
        </header>
    );
}

export default Header;
