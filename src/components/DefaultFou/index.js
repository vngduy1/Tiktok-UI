import classNames from 'classnames/bind';
import styles from './DefauFou.module.scss';

const cx = classNames.bind(styles);
function DefaultF({ children }) {
    return (
        <>
            <div className={cx('wrapper')}>{children}</div>
        </>
    );
}

export default DefaultF;
