import React from 'react';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faUser } from '@fortawesome/free-regular-svg-icons';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, InboxIcon, MessagesIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from './Search';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Language',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'jp',
                    title: 'Japan',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faBookmark} />,
            title: 'Favorites',
            to: '/favorites',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                content={<span>Upload video</span>}
                                placement="top"
                            >
                                {/* <Button normal>
                                    <FontAwesomeIcon
                                        className={cx('upload')}
                                        icon={faPlus}
                                    />
                                    Upload
                                </Button> */}
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                    <span> Upload</span>
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 200]}
                                content={<span>Messages</span>}
                                placement="bottom"
                            >
                                <MessagesIcon className={cx('messages')} />
                            </Tippy>
                            <Tippy
                                delay={[0, 200]}
                                content={<span>Inbox</span>}
                                placement="bottom"
                            >
                                <div className={cx('inbox')}>
                                    <InboxIcon />
                                    <span className={cx('chat-messages')}>
                                        4
                                    </span>
                                </div>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                content={<span>Upload</span>}
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                    <span className="upload-btn"> Upload</span>
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 200]}
                                content={<span>Login</span>}
                                placement="bottom"
                            >
                                <Button primary>Login</Button>
                            </Tippy>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c8922d6c6166e153c6cdcf7f80e3d5a8.jpeg?lk3s=a5d48078&x-expires=1710741600&x-signature=nQZp88mF5WfKxqBjyaBy58TJ2is%3D"
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
