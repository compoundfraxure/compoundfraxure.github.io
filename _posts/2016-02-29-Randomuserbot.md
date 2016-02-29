---
layout: post
title:  "Twitter "
date:   2015-12-14 09:30:20 AM
---

Here is the latest fruits of my programming endeavors: I made a Twitter bot.

<a class="twitter-timeline" data-dnt="true" href="https://twitter.com/Randomuserbot" data-widget-id="704322694469160960" data-chrome="nofooter noborders" data-tweet-limit="5">Tweets by @Randomuserbot</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>

Basically what it does is it takes a random Twitter user ID, finds the user associated with it, and prints out the user's stats in a Tweet.

Unfortunately, I can't @mention the users it finds, because the first time I tried to run it, Twitter revoked the bot's write access. So now, the user's handle is in parenthesis. I also planned on having the bot's avatar change to match up with the user it most recently found, but that turned out to be a bit more complicated than I had hoped. I may implement that later, though.

You can check it out right here: <a href="https://twitter.com/randomuserbot">@Randomuserbot</a>

Also, Node.js is pretty cool.