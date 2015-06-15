# simpleScripts
Simple javascripts that probably can be written in shorter lines

These are actually my first ever javascripts files I have ever written, and the noobiness probably shows.
As you can see, there are two javascript files, <b>NightNDay4chan.user.js</b> and <b>RedditLinksNUpvotes.user.js</b>.

<b>The 4chan one</b> is tied to the setup I have going for 4chan, but if you get the files below, it may work for you, too,
if you tweak the code:

- OneeChan 
- 4chanX (ccd0)

<b>The reddit one</b> should work for everyone. What it basically does is work on these two keybinds: 

- SHIFT + u: Upvotes all links on a reddit link page (not a comment thread yet) and opens links in new tabs (experimental)

- SHIFT + i: Just upvotes all links on a reddit link page

I'd advise against using it right now since I'm experimenting with opening links in
new tabs. I sometimes switch between Firefox and Chrome, and right now, I'm working on links under Chrome. New tabs isn't working
on Chrome, but I think I'll probably get it working like it somehow works on Firefox. The code used for Firefox was a simple 
<b>open("http://blah")</b> since in my Firefox settings, new links would be opened in new tabs, but when I tried it on Chrome,
it would open links in new windows. The main purpose was to automatically upvote and open links 
<a href="https://www.reddit.com/user/Sn1pe/m/nsfwheaven">on my <b>NSFW</b> multireddit</a> so I could show my appreciation and search
for the ultimate sauce of the content posted. 

Since this script was motivated by NSFW content, part of me wants to add in a function to it that goes a step further by searching 
for the sauce for me. Not sure how I'll go about displaying/saving the sauce info, but...I'll find a way ;)

#Install Links

Click the link to install with Tampermonkey (Chrome) or Greasemonkey (Firefox)

<a href="https://github.com/Pythonplusplus/simpleScripts/raw/master/NightNDay4chan.user.js">Night and Day 4chan</a>

<a href="https://github.com/Pythonplusplus/simpleScripts/raw/master/RedditUpvotesNLinks.user.js">Reddit Upvote & Links</a>
