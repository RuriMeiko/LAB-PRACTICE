import { delUser, updateUser, addUser, getUser, getListUser } from '../../controllers/api/User.js';

const UserAPI = (router) => {

    router.get('/getListUser', getListUser);
    router.get('/getUser', getUser);
    router.post('/addUser', addUser);
    router.put('/updateUser', updateUser);
    router.delete('/delUser', delUser);

    return router;
}
export default UserAPI;