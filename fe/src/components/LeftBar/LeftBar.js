import PropTypes from 'prop-types';
import style from './LeftBar.module.css';
import classNames from 'classnames/bind';
import Button from 'components/mini.components/Button';

const cx = classNames.bind(style);


export default function Header({ isLogin }) {
    return (
        <nav className={cx('container')}>
            <Button className={cx('barBtn')}>Quản lý sản phẩm</Button>
        </nav>

    )
}

Header.propTypes = {
    isLogin: PropTypes.bool
}