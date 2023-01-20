import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faEarthAmericas,
    faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane, faEnvelope, faKeyboard } from '@fortawesome/free-regular-svg-icons';
import TippyToolTips from '@tippyjs/react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { useState } from 'react';
import AccountItem from '~/components/AccountItem';
import Button from '../../../Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAmericas} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'VI',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'Language',
                    code: 'EN',
                    title: 'English',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàng phím',
    },
];

function Header() {
    const [searchResults, setSearchResults] = useState([]);

    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    // Handle Logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    let currentUser = true;

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
                    {currentUser ? (
                        <>
                            <Button upload>
                                <FontAwesomeIcon className={cx('icon-upload')} icon={faPlus} />
                                <span>Tải lên</span>
                            </Button>
                            <TippyToolTips delay={[0, 200]} content="Tin nhắn">
                                <Link to="/messenger" className={cx('messenger')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </Link>
                            </TippyToolTips>
                            <TippyToolTips delay={[0, 200]} content="Hộp thư">
                                <div className={cx('mailbox')}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                            </TippyToolTips>
                            <div className={cx('user')}>
                                <img
                                    src="https://p9-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/87e002726dfc96526d3b0d2f58486cc5.jpeg?x-expires=1674309600&x-signature=dZcSRddVP8xsPdhNgL%2B0P9qMYng%3D"
                                    alt=""
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <Button upload>
                                <FontAwesomeIcon className={cx('icon-upload')} icon={faPlus} />
                                <span>Tải lên</span>
                            </Button>
                            <Button primary onClick={() => alert('Thành công')}>
                                {' '}
                                Đăng nhập{' '}
                            </Button>

                            <Menu items={MENU_ITEM} onChange={handleMenuChange}>
                                <div className={cx('more')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </div>
                            </Menu>
                        </>
                    )}
                </div>
            </div>{' '}
        </header>
    );
}

export default Header;
