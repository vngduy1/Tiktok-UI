import classNames from 'classnames/bind';
import styles from './Explore.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const CATEGORY = [
    'SingIng & Dancing',
    'Comedy',
    'Sports',
    'Anime',
    'Relationship',
    'SingIng & Dancing',
    'Comedy',
    'Sports',
    'Anime',
    'Relationship',
];

function Explore() {
    return (
        <div className={cx('wrapper')}>
            <div className="category">
                <div className={cx('category-container')}>
                    {CATEGORY.length > 0 &&
                        CATEGORY.map((item, index) => (
                            <Button key={index} category>
                                {item}
                            </Button>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Explore;
