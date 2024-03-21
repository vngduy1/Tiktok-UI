import classNames from 'classnames/bind';
import styles from './Friends.module.scss';
import Content from '~/pages/Home/Content';

const cx = classNames.bind(styles);
function Friends() {
    const ifFriends = true;
    return (
        <h1 className={cx('wrapper')}>
            <Content ifFriends={ifFriends} />
            <Content ifFriends={ifFriends} />
            <Content ifFriends={ifFriends} />
        </h1>
    );
}

export default Friends;
