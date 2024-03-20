import Content from './Content';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <h2 className={cx('wrapper')}>
            <Content />
            <Content />
            <Content />
        </h2>
    );
}

export default Home;
