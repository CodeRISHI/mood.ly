# Mood.ly

##### A place for you to explore your mood.

#### Check it out at [__moodly.io__](http://moodly.io)!

#### [![Build Status](https://travis-ci.org/CodeRISHI/mood.ly.svg?branch=master)](https://travis-ci.org/CodeRISHI/mood.ly)

## Screenshots

  ![Landing Page](http://i.imgur.com/eHSYJ7j.png)
  ![Login/Signup](http://i.imgur.com/5N0S5lv.png)
  ![Dashboard](http://i.imgur.com/ms5iYUo.png)
  ![Profile](http://i.imgur.com/cUMVo78.png)

## Meet the Engineers

  - __Product Owner__
	- [Kim Curran](https://github.com/kimcurran)
  - __Scrum Master__
	- [Arun Vasudevan](https://github.com/coderishi)
  - __Development Team Members__
	- [Chris Lardizabal](https://github.com/clardizabal), [Wilson Yu](https://github.com/somethiiing)

## Table of Contents

1. [Overview](#Overview)
1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
  1. [Installing Dependencies](#installing-dependencies)
  1. [Current Build Health](#current-build-health)
  1. [Roadmap](#roadmap)
  1. [Progress](#progress)
1. [Architecture](#architecture)
	1. [High Level Architecture](#high-level-architecture)
	1. [Database Schema](#database-schema)
1. [API](#api)
  1. [Auth](#AUTH)
  1. [Moods](#MOODS)
  1. [Quotes](#QUOTES)
  1. [Giphy](#GIPHY)
  1. [Music](#MUSIC)
  1. [Users](#USERS)
1. [Deployment](#deployment)

## Overview

### Tech Stack

- [__React__](https://facebook.github.io/react/)
- [__Node__](https://nodejs.org/en/) and [__Express__](http://expressjs.com/)
- [__Sequelize ORM__](http://docs.sequelizejs.com/en/latest/) and [__MySQL__](https://www.mysql.com/)
- [__Webpack__](https://www.npmjs.com/package/webpack)

### Styling

- [__Material UI__](http://www.material-ui.com/#/)
- [__React Bootstrap__](https://react-bootstrap.github.io/)

### Webpack

`Webpack` bundles all files set by the `webpack.config.js` input folder together so it will load in one script tag. The purpose is to create big chunks that can be loaded asynchronously to reduce initial loading time.


## Usage

> Input your mood and receive a giphy, quote, and music video!

## Requirements

Dependencies in `package.json`

```sh
    "babel-cli": "^6.7.7",
    "babel-core": "^6.7.7",
    "babel-loader": "^6.2.4",
    "babel-preset-es2015": "^6.6.0",
    "babel-preset-react": "^6.5.0",
    "babel-preset-stage-1": "^6.5.0",
    "babel-register": "^6.7.2",
    "bcrypt-nodejs": "0.0.3",
    "body-parser": "^1.15.0",
    "bootstrap": "^3.3.6",
    "chai": "^3.5.0",
    "chai-things": "^0.2.0",
    "connect-flash": "^0.1.1",
    "eslint": "^2.9.0",
    "eslint-plugin-import": "^1.6.1",
    "eslint-plugin-jsx-a11y": "^1.0.4",
    "express": "^4.13.4",
    "express-react-views": "^0.10.1",
    "express-session": "^1.13.0",
    "flash": "^1.1.0",
    "jquery": "^2.2.3",
    "material-ui": "^0.15.0",
    "mocha": "^2.4.5",
    "mysql": "^2.10.2",
    "nodemon": "^1.9.1",
    "react": "^15.0.2",
    "react-bootstrap": "^0.29.4",
    "react-dom": "^15.0.2",
    "react-infinite": "^0.9.2",
    "react-tap-event-plugin": "^1.0.0",
    "request": "^2.72.0",
    "sequelize": "^3.22.0",
    "webpack": "^1.13.0"
```

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Getting Started

After everything installed using `npm install`, update the API key in `/server/config/authconfig.js` for YouTube. The `authConfig-example.js` file is provided for you. Just remove -example and update keys.  


```sh
mysql.server --start
mysql -u -root -p
webpack --watch
npm start
```

Navigate to `localhost:8080` to view the app.

### Testing

To run tests using `Mocha` and `Chai`, run

```sh
npm test
```

### Roadmap

View the project roadmap [here](https://waffle.io/MysteriousBagel/mood.ly)
[![Stories in 'Backlog'](https://badge.waffle.io/MysteriousBagel/mood.ly.svg?label=Backlog&title=Backlog)](https://waffle.io/MysteriousBagel/mood.ly)
[![Stories in 'Ready'](https://badge.waffle.io/MysteriousBagel/mood.ly.svg?label=Ready&title=Ready)](https://waffle.io/MysteriousBagel/mood.ly)
[![Stories in 'In Progress'](https://badge.waffle.io/MysteriousBagel/mood.ly.svg?label=In%20Progress&title=In%20Progress)](https://waffle.io/MysteriousBagel/mood.ly)

### Progress

[![Throughput Graph](https://graphs.waffle.io/MysteriousBagel/mood.ly/throughput.svg)](https://waffle.io/MysteriousBagel/mood.ly/metrics/throughput)

## Architecture

### High Level Architecture

![Architecture Diagram](/client/app/assets/ArchitectureDiagram.png)

### Database Schema
Database in `MySQL`, using `Sequelize`.

![Database Schema](/readmefiles/databaseSchema.png)

### API

####AUTH
* Sign Up: POST: `/signup`
  * Success Response: { success: true, body: user }
  * Fail Response: { success: false, body: err }

* Log In: POST: /login`
  * Success Response: { success: true, body: user }
  * Fail Response: { success: false, body: 'Invalid username or password' }

####MOODS
* Saves Inputted Mood: POST: `/api/moods`
  * Success Response: { success: true, body: mood }
  * Fail Response: { success: false, body: err }

* Retrieves All Moods: GET: `api/moods`
  * Success Response: { success: true, body: allMoods }
  * Fail Response: { success: false, body: err }

####QUOTES
* Produce a Quote: GET: `/api/wikiInfo`
  * Success Response: { success: true, body: quote }
  * Fail Response: { success: false, body: err }

* Save Particular Quote: POST: `/api/quotes`
  * Success Response: { success: true, body: 'Successfully saved quote.' }
  * Fail Response: { success: false, body: 'Did not save quote.' }

* Retrieves All Quotes: GET: `/api/quotes`
  * Success Response: 
    { success: true, body: { [{Text: String, Mood: String}, ... ] } }
  * Fail Response: { success: false, body: err }

* Retrieves Quote by ID: GET: `/api/quotes/:id`
  * Success Response: { success: true, body: {Text: String, Mood: String} }
  * Fail Response: { success: false, body: err }

####GIPHY
* Produce a GIF: GET: `/api/giphyInfo`
  * Success Response: { success: true, body: String }
  * Fail Response: { success: false, body: err }

* Save Particular GIF: POST: `/api/giphys`
  * Success Response: { success: true, body: 'Successfully saved GIF.' }
  * Fail Response: { success: false, body: err }

* Retrieves All GIFs: GET: `/api/giphys`
  * Success Response: 
    * { success: true, body: { [{URL: String, Mood: String}, ... ] } }
  * Fail Response: { success: false, body: err }

* Retrieves GIF by ID: GET: `/api/giphys/:id`
  * Success Response: { success: true, body: {URL: String, Mood: String} }
  * Fail Response: { success: false, body: err }

####MUSIC
* Produce a Youtube Video ID: GET: `/api/musicInfo`
  * Success Response: { success: true, trackInfo, videoID }
  * Fail Response: { success: false, keyword, body: err }

* Save Particular Video ID: POST: `/api/music`
  * Success Response: { success: true, body: 'Successfully saved Video Id.' }
  * Fail Response: { success: false, body: err }

* Retrieves All Video IDs: GET: `/api/music`
  * Success Response: 
    * { success: true, body: { [{VideoId: String, Mood: String}, ... ] } }
  * Fail Response: { success: false, body: err }

* Retrieve Video ID by ID: GET: `/api/music/:id`
  * Success Response: { success: true, body: {VideoId: String, Mood: String} }
  * Fail Response: { success: false, body: err }

####USERS
* Retrieves Quotes by User ID: GET: `/api/user/quotes`
  * Success Response: 
    * { success: true, body: { [{Text: String, Mood: String}, ... ] } }
  * Fail Response: { success: false, body: err }

* Retrieves GIFs by User ID: GET: `/api/user/giphys`
  * Success Response: 
    * { success: true, body: { [{URL: String, Mood: String}, ... ] } }
  * Fail Response: { success: false, body: err }

* Retrieves Video ID by User ID: GET: `/api/user/music`
  * Success Response: 
    * { success: true, body: { [{VideoId: String, Mood: String}, ... ] } }
  * Fail Response: { success: false, body: err }

## Deployment

Deployed using `Digital Ocean`. Installed a MySQL Database. Live at [__moodly.io__](http://moodly.io)!