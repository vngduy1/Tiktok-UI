import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c8922d6c6166e153c6cdcf7f80e3d5a8.jpeg?lk3s=a5d48078&x-expires=1710741600&x-signature=nQZp88mF5WfKxqBjyaBy58TJ2is%3D"
                    alt=""
                />
                <Button outline small>
                    Follow
                </Button>
            </header>
            <div className={cx('body')}>
                <strong className={cx('username')}>
                    <span>duyhocode</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </strong>
                <p className={cx('name')}>Kênh lập trình</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
