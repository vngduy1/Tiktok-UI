import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import Content from '~/pages/Home/Content';

const cx = classNames.bind(styles);
function Following() {
    const Following = true;
    return (
        <div className={cx('wrapper')}>
            <Content Following={Following} />
            <Content Following={Following} />
            <Content Following={Following} />
        </div>
    );
}

export default Following;
