# Realtime Questionnaire

### 基于 `node.js`、`express`、`mongoDB`、`angularJS`、`socket.io` 的实时投票调查程序 

---

> 运行之前要确定你安装了 `node.js`、`mongoDB`

首先，把项目克隆到本地

> git clone git@github.com:kof97/realtime-questionnaire.git

接下来，安装所需依赖

主要有 `mongoose` `socket.io` `express`

> npm install

接下来，启动 `mongoDB` 服务

`dbpath` 为你的数据目录，我的是 `D:\data\db`

> mongod --dbpath D:\data\db

然后进入到 `bin` 目录下，开启服务

> node www

ok，现在访问 `127.0.0.1:3000` 就行了

---

主要实现了在线的实时投票调查



