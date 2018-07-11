//LoginApi.js

var loginDaoCall = loginDao.login(username, password);

loginDaoCall
    .then(function (res) {
        store.dispatch(loginSuccess());
        log.log("[loginApi.login] END");
    })
    .catch(function (err) {
        store.dispatch(loginFail());
        errorUtils.dispatchErrorWithTimeout(errorLogin);
        log.log(err);
    });

return loginDaoCall;
//oginContainer.js
loginApi.login(user, password).then(() => {
});