import connection from '../config/db.config';

const registerUserModel = async (user) => {
    try {
        const [rows, field] = await connection.execute('INSERT INTO `users` (`username`, `password`, `fullname`, `address`, `email`, `sex`) VALUES (?, ?, ?, ?, ?, ?)', [user.username, user.password, user.fullname, user.address, user.email, user.sex]);
        return rows;

    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};

const loginUserModel = async (username, password) => {
    try {
        const [rows, field] = await connection.execute('SELECT username FROM `users` WHERE `username` = ? AND `password` = ?', [username, password]);
        if (rows.length > 0) {
            return rows[0];
        } else {
            return null;
        }
    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};


export { registerUserModel, loginUserModel }