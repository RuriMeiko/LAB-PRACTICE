import mysql from 'mysql2';

const pool = mysql.createPool({
  host: 'localhost', // Địa chỉ máy chủ MySQL
  user: 'root', // Tên người dùng MySQL
  password: '', // Mật khẩu MySQL
  database: 'lab2nodejs', // Tên database
  waitForConnections: true,
});

const connection = pool.promise();
export default connection;