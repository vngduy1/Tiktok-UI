import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    const renderPreview = (attrs) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <AccountPreview data={data} />
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
                <Image
                    className={cx('avatar')}
                    src={data.avatar}
                    alt={data.nickname}
                />
                <div className={cx('item-info')}>
                    <h4>
                        <span className={cx('username')}>{data.nickname}</span>
                        {data.tick && (
                            <FontAwesomeIcon
                                className={cx('check')}
                                icon={faCheckCircle}
                            />
                        )}
                    </h4>
                    <p
                        className={cx('name')}
                    >{`${data.first_name} ${data.last_name}`}</p>
                </div>
            </div>
        </Tippy>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
