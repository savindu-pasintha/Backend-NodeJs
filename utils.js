const autorizedHeader = (req) => {
    if (
      typeof req.headers["token"] !== "undefined" &&
      req.headers["token"] !== null &&
      req.headers["token"] != ""
    ) {
      return true;
    }
  };

module.exports = {autorizedHeader}  