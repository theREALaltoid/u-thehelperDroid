
 
require('dotenv').config();

const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

// Build Snoowrap and Snoostorm clients
const r = new Snoowrap({
    userAgent: 'thehelperdroid',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
});
const client = new Snoostorm(r);
// Configure options for stream: subreddit & results per query
const streamOpts = {
    subreddit: 'all',
    results: 100,
    pollTime: 2000
};
// Create a Snoostorm CommentStream with the specified options
const comments = client.CommentStream(streamOpts);

// On comment, perform whatever logic you want to do
comments.on('comment', (comment) => {
    console.log(comment);
        if (comment.body.includes('I want to die')) {
    comment.reply("Helperdroid and its creator love you, here's some people that can help:\n\r\n\r https://pastebin.com/iAhaF92s");
}

    if (comment.body.includes('I hate being bullied')) {
    comment.reply("Helperdroid and its creator love you, here's some people that can help:\n\r\n\r https://pastebin.com/iAhaF92s");
}

    if (comment.body.includes('Im tired of being depressed')){
    comment.reply("Helperdroid and its creator love you, here's some people that can help:\n\r\n\r https://pastebin.com/iAhaF92s");
}

    if (comment.body.includes('I hate being bullied for being gay')) {
    comment.reply("Helperdroid and its creator love you, here's some people that can help:\n\r\n\r https://pastebin.com/iAhaF92s");
}

if (comment.body.includes('Im gonna shoot myself')) {
    comment.reply("Helperdroid and its creator love you, here's some people that can help:\n\r\n\r https://pastebin.com/iAhaF92s");
}
if (comment.body.includes('I make myself throw up')) {
    comment.reply("Helperdroid and its creator love you, here's some people that can help:\n\r\n\r https://pastebin.com/iAhaF92s");
}

if (comment.body.includes('I want to shoot myself')) {
    comment.reply("Helperdroid and its creator love you, here's some people that can help:\n\r\n\r https://pastebin.com/iAhaF92s");
}
if (comment.body.includes('I want to hang myself')) {
    comment.reply("Helperdroid and its creator love you, here's some people that can help:\n\r\n\r https://pastebin.com/iAhaF92s");
}











});



