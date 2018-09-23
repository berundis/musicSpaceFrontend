# MusicSpace Front-End

[Demo Video](https://www.youtube.com/watch?v=jox1A4WOzlU)

## About

MusicSpace is a Band/Venue social network web-app that intends to solve the problem that musicians without managers or representation face when planning an event or tour.

This app is for educational proposes and all the data it contains is seeded and fake.

## Features

* Create account as a Band (CRUD)
* Create account as a Venue (CRUD)
* Create Shows
* Search for Bands
  * Filter by: Name, Location (State & City), Genre
* Search for Venues
  * Filter by: Name, Location (State & City), Genre
* Search for Shows
  * Filter by: Location (State & City), Genre, Band Name, Venue Name

## Running the App

First you need to fork/clone [MusicSpace-API](https://github.com/donkeywaffles/musicSpacebackend) and start your local rails server on port 3000
```
rails s
```

Then the Front-End can run in any local port
```
npm install && npm start
```

## ScreenShots

Profile 1.A
![Profile A](https://i.imgur.com/vPq677L.png)
Profile 1.B
![Profile B](https://i.imgur.com/ZVp0qYi.png)
Bands Index
![Bands](https://i.imgur.com/L3AlDv8.png)
