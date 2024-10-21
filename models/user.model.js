import connection from '../config/db.config';

const getUsers = async () => {
    try {
        const [rows, field] = await connection.execute('SELECT * FROM `users`');
        return rows;
    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};
export default getUsers;