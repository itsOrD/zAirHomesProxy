# zAirHomes' Proxy
zAirHomes is an opens source full-stack web application for renting homes and shared spaces.

**Technical Brief**: *This repo is the building block for the Docker containers that were hosted on AWS EC2 t2 micros and scaled to over 1400 RPS using custom load balancing and nGinx (more details about this at the bottom of the repo).*

# "Start Here"
Book a place to stay based on location, reviews, photos and similar suggestions?
[![zAirHomes Tour](https://img.youtube.com/vi/-j8bSskK35Q/0.jpg)](https://youtu.be/-j8bSskK35Q)

# Use the App
The live instances of the micro-services that make up this app are not currently available.  Links to their repos, screenshots, and gifs of the full product will be added to this README.

 - - - 

## Technical Summary
● Open source room rental web application with booking, info, reviews, photo gallery, and related home carousel modules

● Deployed with Docker, AWS EC2, Nginx & scaled for production level traffic

● Achieved a 20,000% increase in throughput using horizontal scaling on EC2 t2 micros and nginx load-balancing

● Stress tested with Loader.io and tracked with New Relic to optimize for 2000ms or less PostgreSQL query results with less than 1% error rate regardless of production traffic spikes


## Built With
 * ReactJS (ES6+ && hooks)
 * Docker
 * styled-components
 * PostGresQL
 * Express.js
 * Node.js
 * Webpack/Babel
 * and more!

 - - - 

## Project Roadmap 
TBD
 
 - - - 

### Author
 * Matthew Beckerleg - [github.com/itsOrD](github.com/itsOrD)
 
### License
 * This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.
 
