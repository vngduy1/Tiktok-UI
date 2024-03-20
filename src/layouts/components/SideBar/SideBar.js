import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';

import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    HomeIcon,
    HomeIconActive,
    FollowingIcon,
    FollowingIconActive,
    FriendIcon,
    FriendIconActive,
    ExploreIcon,
    ExploreIconActive,
    LiveIcon,
    LiveIconActive,
} from '~/components/Icons';
import Tippy from '@tippyjs/react';
import SuggestedAccount from '~/components/SuggestedAccount';
import * as userService from '~/service/userService';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const Menu_item = [
    {
        title: 'For you',
        to: config.routes.home,
        icon: <HomeIcon />,
        activeIcon: <HomeIconActive />,
    },
    {
        title: 'Following',
        to: config.routes.following,
        icon: <FollowingIcon />,
        activeIcon: <FollowingIconActive />,
    },
    {
        title: 'Friends',
        to: config.routes.friends,
        icon: <FriendIcon />,
        activeIcon: <FriendIconActive />,
    },
    {
        title: 'Explore',
        to: config.routes.explore,
        icon: <ExploreIcon />,
        activeIcon: <ExploreIconActive />,
    },
    {
        title: 'LIVE',
        to: config.routes.live,
        icon: <LiveIcon />,
        activeIcon: <LiveIconActive />,
    },
];

const PER_PAGE = 5;

function Sidebar() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page: 1, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUsers((prev) => [...prev, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={cx('container')}>
            <aside className={cx('wrapper')}>
                <Menu>
                    {Menu_item.length > 0 &&
                        Menu_item.map((item, index) => {
                            return (
                                <MenuItem
                                    key={index}
                                    title={item.title}
                                    to={item.to}
                                    icon={
                                        <Tippy
                                            delay={[0, 200]}
                                            content={<span>{item.title}</span>}
                                            placement="right"
                                        >
                                            {item.icon}
                                        </Tippy>
                                    }
                                    activeIcon={
                                        <Tippy
                                            delay={[0, 200]}
                                            content={<span>{item.title}</span>}
                                            placement="right"
                                        >
                                            {item.activeIcon}
                                        </Tippy>
                                    }
                                />
                            );
                        })}
                </Menu>
                <SuggestedAccount
                    label="Suggested accounts"
                    data={suggestedUsers}
                />
                <SuggestedAccount
                    label="Suggested accounts"
                    data={suggestedUsers}
                />
                <SuggestedAccount label="Following accounts" />
            </aside>
        </div>
    );
}

export default Sidebar;
