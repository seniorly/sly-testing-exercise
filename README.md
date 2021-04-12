Seniorly testing exercise
=================

This exercise has a very simple premise. You like Twitter a lot, so you have
decided to create a web app optimized for mobile with an infinite scroll to show
the tweets of your favourite twitter accounts. Luckily for you, your teammate has already created the application.

## *Your task is to write unit and functional tests for the application*.
The app has a single screen that is composed of two main components: Menu and Tweet Stream
You can organize your testing around these components.

# TwT Read (Twitter Reader)
*important note* The first time you hit the /:handle endpoint, it may take a bit to compile, just wait for the terminal to say compiled successfully.

The concept of TwTrD is to make reading tweets easier on the eyes. No other distractions, just you and the feed.


The Menu
--------

Imagine a menu with two handles, for example [@POTUS, @World_Wildlife], this
menu must stay at the top of the visible window (sticky), if the user taps in
the other handle, the list is replaced by the new list. If the user taps in the
current selected handle, the list should scroll all the way up to the latest
tweet.


The tweet stream
----------------

The api will give you 20 tweets at a time. When then user has scrolled down
_close_ to the oldest tweet in the list, the app should fetch the next 20,
behaving like an infinite scroll.

You can choose what data from the api could be nice to have, may be images if
they come with the tweet, date, picture of the twitter user account, etc.

Remember that this is a mobile optimized app, so it should be very confortable
to scroll with the swiping gesture.

Tech
----

You are free to choose any tech that will aid you in writing the tests.

## Getting Started
Local Development:
  - npm install
  - create a .env file with:
    - consumer_key="xx"
    - consumer_secret="xx"
    - access_token_key="xx"
    - access_token_secret="xx"
    - port=3000
  - Run `Local Debug` from VSC Debugger commands to start coding. (after running npm install and the server ofcourse)
  - or npm run dev

![`Local Debug`](./readme_assets/vsc_debug_start.png).


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!



Uncompress the zip file and install the node modules

  npm install

Put twitter keys and secrets inside index.js and run

  npm start

You can generate keys and tokens in the Twitter developer portal:

  https://developer.twitter.com/en/apps
  
following this instructions:

  https://developer.twitter.com/en/docs/basics/authentication/guides/securing-keys-and-tokens

Then you can start to ping the url like this:

  http://localhost:3000/:handle[?max_id=...]

For example

  http://localhost:3000/POTUS?max_id=1028275158342098944

Where max_id is the newest tweet to show, this is normally the latest tweet
id_str attribute in the previous request, take into account that there is always
a duplicate tweet doing it like this.

Expected deliverable
--------------------

A zip or a github repo minus the keys and the secrets (also removed from the 
commit history if they ever got leaked). And instructions to run the project.


Thank you very much for accepting the challenge. Have fun!
