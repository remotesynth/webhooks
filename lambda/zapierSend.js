const axios = require('axios');


exports.handler = async (event, context, callback) => {
  try {
    if(!event.body) {
        return { 
            statusCode: 500, 
            body: 'Name and email code are required.'
        };
    }

    const body = JSON.parse(event.body);
    const email = body.email;
    const fullName = body.fullName;
    if(!email) {
        return { 
            statusCode: 500, 
            body: 'email parameter required' 
        };
    }
    if(!fullName) {
        return { 
            statusCode: 500, 
            body: 'name parameter required' 
        };
    }
    
    return axios({
      method: 'post',
      url: 'https://hooks.zapier.com/hooks/catch/2422393/otw0s6l/',
      data:{
            'email':email,
            'fullName':fullName
      }
    }).then(res => {
      console.log(res);
      return {
        statusCode:200, 
        body: JSON.stringify(res.data)
      }
    })
    .catch(err => {
      return { statusCode: 200, body: JSON.stringify(err.response.data.errors[0]) };
    });

  } catch (err) {[]
    return { statusCode: 500, body: err.toString() };
  }

};