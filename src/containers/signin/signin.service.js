import superFetch from '../../utility/superFetch';

const Auth = {
  login: async userInfo =>
    await superFetch.post('login', userInfo).then(response => response)
};

export default Auth;
