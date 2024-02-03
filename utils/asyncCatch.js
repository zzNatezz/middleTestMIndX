export const asyncCatch = (fn) => async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        data :error.message,
        status : "failed",
        mes : "please check data"
      });
    }
  };