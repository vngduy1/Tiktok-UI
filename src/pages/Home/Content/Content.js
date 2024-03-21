import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBookmark,
    faComment,
    faHeart,
} from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Content({ Following, ifFriends }) {
    return (
        <div className={cx('wrapper')}>
            <a className={cx('avatar-link')} href="/">
                <Image className={cx('avatar')} src={'/a'} alt="" />
            </a>
            <div className={cx('content-container')}>
                <div className={cx('info')}>
                    <div className={cx('author')}>
                        <a href="/">duyhoccode</a>
                    </div>
                    {Following || ifFriends ? (
                        ' '
                    ) : (
                        <Button outline className={cx('btn-follow')}>
                            Follow
                        </Button>
                    )}
                    <p className={cx('title')}>Kênh lập trình</p>
                </div>
                <div className={cx('video')}>
                    <div className={cx('video-container')}>Video</div>
                    <div className={cx('items')}>
                        <button className={cx('btn-item')}>
                            <span className={cx('item')}>
                                <FontAwesomeIcon icon={faHeart} />
                            </span>
                            <strong className={cx('icon-title')}>1M</strong>
                        </button>
                        <button className={cx('btn-item')}>
                            <span className={cx('item')}>
                                <FontAwesomeIcon icon={faComment} />
                            </span>
                            <strong className={cx('icon-title')}>19.2K</strong>
                        </button>
                        <button className={cx('btn-item')}>
                            <span className={cx('item')}>
                                <FontAwesomeIcon icon={faBookmark} />
                            </span>
                            <strong className={cx('icon-title')}>99.1K</strong>
                        </button>
                        <button className={cx('btn-item')}>
                            <span className={cx('item')}>
                                <FontAwesomeIcon icon={faShare} />
                            </span>
                            <strong className={cx('icon-title')}>208.8K</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
