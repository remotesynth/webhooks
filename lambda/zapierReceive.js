exports.handler = async (event, context, callback) => {
  console.log(event);
  try {
    if(!event.body) {
      return { 
          statusCode: 500, 
          body: 'Title and link are required.'
      };
    }
    const body = JSON.parse(event.body);
    const title = body.title;
    const link = body.link;
    if(!title) {
        return { 
            statusCode: 500, 
            body: 'title parameter required' 
        };
    }
    if(!link) {
        return { 
            statusCode: 500, 
            body: 'link parameter required' 
        };
    }
    return {
      statusCode:200, 
      body: '{"foo":"bar"}'
    }
  } catch (err) {[]
    return { statusCode: 500, body: err.toString() };
  }

};