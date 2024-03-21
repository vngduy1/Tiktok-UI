import { useRef } from 'react';
import * as userService from '~/service/userService';
import { useEffect, useState } from 'react';
import Content from './Content';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Home() {
    const topRef = useRef(null);

    const scrollToTop = () => {
        console.log('1');
        topRef.current.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const [data, setData] = useState([]);

    const handleDetailVideo = async () => {
        const data = await userService.getUserVideo({
            uuid: '86a8e80a-3f73-48b0-a32a-bd07ca7b109d',
        });
        setData(data);
    };

    useEffect(() => {
        handleDetailVideo();
    }, []);
    return (
        <h2 className={cx('wrapper')}>
            <Content video={data} />
            <Content />
            <Content />
            <div hidden>
                <Button onClick={scrollToTop}>Top</Button>
                <div ref={topRef}></div>
            </div>
        </h2>
    );
}

export default Home;
