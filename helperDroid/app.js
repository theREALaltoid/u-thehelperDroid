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

const commentContains = (phrases, comment) => {
  for (let p in phrases)
      if (comment.body.includes(p)) return true;
  return false;
}

const performReplyOn = comment => {
    const reply = 'Helperdroid and its creator love you, here\'s some people that can help:\n\r\n\r https://pastebin.com/iAhaF92s\n\r\n\r [source](https://github.com/TheTRUEHoohah/u-thehelperDroid) | [contact]()'
    comment.reply(reply);
}

// On comment, perform whatever logic you want to do
comments.on('comment', (comment) => {
    console.log(comment);
    const phrases = [
        'I want to die',
        'I hate being bullied',
        'Im tired of being depressed',
        'I hate being bullied for being gay',
        'Im gonna shoot myself',
        'I make myself throw up',
        'I want to shoot myself',
        'I want to hang myself',
    ];
    if (commentContains(phrases, comment))
        performReplyOn(comment);
});
