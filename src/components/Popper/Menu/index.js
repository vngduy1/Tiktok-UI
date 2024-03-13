import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFn = () => {};
function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <>
            <Tippy
                visible
                delay={[0, 700]}
                interactive
                placement="bottom-end"
                render={(a) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...a}>
                        <PopperWrapper className={cx('menu-popper')}>
                            {history.length > 1 && (
                                <Header
                                    title={'Language'}
                                    onBack={() => {
                                        setHistory((prev) =>
                                            prev.slice(0, prev.length - 1),
                                        );
                                    }}
                                />
                            )}
                            {renderItems()}
                        </PopperWrapper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </>
    );
}

export default Menu;