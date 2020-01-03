exports.handler = async (event, context, callback) => {
  try {
      return {
        statusCode:200, 
        body: JSON.stringify(res.data)
      }
  } catch (err) {[]
    return { statusCode: 500, body: err.toString() };
  }

};