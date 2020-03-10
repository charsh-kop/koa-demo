const body = {
    code: 200,
    msg: 'success',
    data: {
        userNo: 'charsh',
        userName: 'charsh-kop',
        token: 'xxxxxxx'
    }
}

const loginRequest = async (ctx, next) => {
    ctx.response.body = body;
}

const getLoginBox = async (ctx, next) => {
    ctx.response.body = `<h1>Login Box</h1>
        <form action="/login" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
}

module.exports = {
    'POST /login': loginRequest,
    'GET /getlogin': getLoginBox
}