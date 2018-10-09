var Slack = require('slack-node');
 
webhookUri = "https://nodeoutlet.slack.com/messages/D2KF5SRJ7/";
 
slack = new Slack();
slack.setWebhook(webhookUri);
 
slack.webhook({
  channel: "#general",
  username: "vinay mengu",
  text: "This is posted to #general and comes from a bot named webhookbot."
}, function(err, response) {
  console.log(response);
});