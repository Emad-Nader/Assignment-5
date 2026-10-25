const { sequelize } = require('./common/DB/conections.js');
require("./common/DB/associations.js");
const express = require('express');
const app = express();
app.use(express.json());

const userRouter = require('./user/user.router.js');
const postRouter = require('./post/post.router.js');
const commentRouter = require('./comment/comment.router.js');

app.use('/user', userRouter);

app.use('/posts', postRouter);

app.use('/comment', commentRouter);



app.listen(3000, () => {
  console.log('server is running on port 3000');
});