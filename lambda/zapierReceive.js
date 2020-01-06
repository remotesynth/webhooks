const fs = require('fs'),
      Octokit = require("@octokit/rest"),
      owner = 'remotesynth',
      repo = 'webhooks';

exports.handler = async (event, context, callback) => {
  try {
    const octokit = new Octokit({auth:'e6cc755319b23616f111a7826c083bb29c2547f0'});
    if(!event.body) {
      return { 
          statusCode: 500, 
          body: 'Title and link are required.'
      };
    }
    const body = JSON.parse(event.body);
    const newItem = {};
    newItem.title = body.title;
    newItem.link = body.link;
    if(!newItem.title) {
        return { 
            statusCode: 500, 
            body: 'title parameter required' 
        };
    }
    if(!newItem.link) {
        return { 
            statusCode: 500, 
            body: 'link parameter required' 
        };
    }

    octokit.repos.getContents({
      owner,
      repo,
      'links.json'
    })

    return {
      statusCode:200, 
      body: '{"success":"true"}'
    }
  } catch (err) {[]
    return { statusCode: 500, body: err.toString() };
  }

};