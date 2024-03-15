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

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'language',
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
//  className={cx('')}
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
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
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
                                <InboxIcon />
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f66a9971d2ad397edd4e8e905e19fb39.jpeg?lk3s=a5d48078&x-expires=1710554400&x-signature=Kw10xlI6B9Qr8YCu4NJH2wJfniw%3D"
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
