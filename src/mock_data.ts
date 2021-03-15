const asyncPromise = async (data: any, duration: number = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, duration);
  });
};

export const userLogin = (account: string, password: string) => {
  console.log(`Account: ${account}, Password: ${password}`);
  return asyncPromise({
    access_token: "test_token",
  });
};

export const getUserInfo = () => {
  return asyncPromise({
    username: "Andy",
    avatar: "https://static.metafy.gg/default_avatar.png",
  });
};
