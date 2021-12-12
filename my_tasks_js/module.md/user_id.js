let id = 0;
const user_id = () => ++id;

const user_time = () => new Date();

module.exports = {user_id,user_time};
