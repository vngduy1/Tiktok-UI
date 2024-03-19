// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);
function AccountItem({ label }) {
    const renderPreview = (attrs) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <Tippy
            delay={[300, 300]}
            interactive
            offset={[-4, -4]}
            placement="bottom"
            render={renderPreview}
        >
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c8922d6c6166e153c6cdcf7f80e3d5a8.jpeg?lk3s=a5d48078&x-expires=1710741600&x-signature=nQZp88mF5WfKxqBjyaBy58TJ2is%3D"
                    alt=""
                />
                <div className={cx('item-info')}>
                    <h4>
                        <span className={cx('username')}>
                            duyhoccodeaaaaaaaa
                        </span>
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCheckCircle}
                        />
                    </h4>
                    <p className={cx('name')}>kênh lập trình</p>
                </div>
            </div>
        </Tippy>
    );
}

AccountItem.propTypes = {
    // label: PropTypes.string.isRequired,
};

export default AccountItem;
