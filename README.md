# Seniorly testing exercise

This exercise has a very simple premise. You like Twitter a lot, so you have
decided to create a web app optimized for mobile with an infinite scroll to show
the tweets of your favourite twitter accounts. Luckily for you, your teammate has already created the application.

### _Your task is to write unit and functional tests for the application_.

A sample unit test is located src/components/Header.test.js
A sample functional test is located at e2e/cypress/integration/sections.spec.js

The task will be evaluated across two dimensions:
1. Test Planning and Organization ( e.g: Are test cases sufficient, appropriate, prioritized, etc.)
2. Programming Practices ( e.g: readibility, encapsulation etc.)

The app has a single screen that is composed of two main components: Menu and Tweet Stream
You can organize your testing around these components.

# About the Application: TwT Read (Twitter Reader)

_important note_ The first time you hit the /:handle endpoint, it may take a bit to compile, just wait for the terminal to say compiled successfully.

The concept of TwTrD is to make reading tweets easier on the eyes. No other distractions, just you and the feed.

## The Menu

Imagine a menu with two handles, for example [@POTUS, @World_Wildlife], this
menu must stay at the top of the visible window (sticky), if the user taps in
the other handle, the list is replaced by the new list. If the user taps in the
current selected handle, the list should scroll all the way up to the latest
tweet.

## The tweet stream

The api will give you 20 tweets at a time. When then user has scrolled down
_close_ to the oldest tweet in the list, the app should fetch the next 20,
behaving like an infinite scroll.

Remember that this is a mobile optimized app, so it should be very comfortable
to scroll with the swiping gesture.

## Tech

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

Uncompress the zip file and install the node modules

npm install

Put twitter keys and secrets inside index.js and run

npm start

**To Run Cypress you need to cd into the e2e directory and run**

npm install

npm start // runs tests in terminal

npm run open // opens cypress app

To succesfully run any cypress tests you must have dev server running (see e2e/package.json).

In the root directory use the below command to run jest. This will watch for changes and rerun your tests. To stop just do ctrl+C.

npm run test

You can generate keys and tokens in the Twitter developer portal:

https://developer.twitter.com/en/apps

following this instructions:

https://developer.twitter.com/en/docs/basics/authentication/guides/securing-keys-and-tokens

Then you can start to ping the url like this:

http://localhost:3000/:handle



## Expected deliverable

A zip or a github repo minus the keys and the secrets (also removed from the
commit history if they ever got leaked). And instructions to run the project.

Thank you very much for accepting the challenge. Have fun!
