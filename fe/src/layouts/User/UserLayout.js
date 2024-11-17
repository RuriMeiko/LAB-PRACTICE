import Header from 'components/Header';
import style from './UserLayout.module.css';
import classNames from 'classnames/bind';
import LeftBar from 'components/LeftBar';
const cx = classNames.bind(style);

export default function UserLayout({ children }) {

    return (
        <div className={cx('container')}>
            <Header/>
            <div className={cx('content')}>
                <LeftBar />
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
}