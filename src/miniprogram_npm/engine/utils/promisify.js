function promisify(func, obj = {}) {
  let returnValue = null;
  const promise = new Promise((resolve, reject) => {
    returnValue = func({
      ...obj,
      success(res) {
        resolve(res);
        if (obj.success) {
          obj.success(res);
        }
      },
      fail(res) {
        reject(res);
        if (obj.fail) {
          obj.fail(res);
        }
      },
    });
  });

  if (obj.needReturnValue) {
    return [promise, returnValue];
  }

  return promise;
}

export default promisify;
