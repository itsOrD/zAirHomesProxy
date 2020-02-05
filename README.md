# zAirHomes' Proxy
zAirHomes is an opens source full-stack web application for renting homes and shared spaces.

#### Technical Brief
*This repo is the building block for the Docker containers that were hosted on AWS EC2 t2 micros and scaled to over 1400 RPS using custom load balancing and nGinx (more details about this at the bottom of the repo).*

# "Start Here"
Book a place to stay based on location, reviews, photos and similar suggestions?
![].(https://drive.google.com/open?id=1A24uUK1vbsW8rwxCYbmRf0CceSZZl07H)

# Use the App
The live instances of the micro-services that make up this app are not currently available.  Links to their repos, screenshots, and higher res videos of the full product will be added to this README asap.

 - - - 

## Technical Summary
● Open source room rental web application with booking, info, reviews, photo gallery, and related home carousel modules
● Deployed with Docker, AWS EC2, Nginx & scaled for production level traffic
● Achieved a 20,000% increase in throughput using horizontal scaling on EC2 t2 micros and nginx load-balancing
● Stress tested with Loader.io and tracked with New Relic to optimize for 2000ms or less PostgreSQL query results with less than 1% error rate regardless of production traffic spikes

## Built With
 * ReactJS (ES6+ && hooks)
 * Grommet
 * Mongo/Mongoose
 * Express.js
 * Node.js
 * Webpack/Babel

 - - - 

## Project Roadmap 
This is an MVP, conceived and produced in less than 48 hours. Once functionality is improved, including integrating oAuth and location sharing future system design plans include:
 * create a Kubernetes pod
 * deploy on Microsoft Azure
 * persist data with Azure hosted Cassandra cluster
 * split out to micro-services
 * deploy with load-balancers
 * beta-test
 * submit to Android App store
 
 - - - 

### Author
 * Matthew Beckerleg - [github.com/itsOrD](github.com/itsOrD)
 
### License
 * This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.
 
