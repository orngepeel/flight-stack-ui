### This application was created as part of TechTogetherBoston 2022
# [Live Demo](https://flight-stack-ui-production.up.railway.app/)
---
## Inspiration
- Swiping dating apps
- Price comparison APIs
- It's the Tinder for Flights
## What it does
Input search parameters, and start swiping! Is that flight too expensive? Is it on Spirit Airlines? Swipe left! 
Swipe right on those flights that look reasonably priced, and without too many layovers. Then compare your saved flights to make your final decision.

Flight Stack uses the TripAdvisor API to get flight information based on search parameters, then presents those flights to the user in the form of a stack of swipe-able cards. Cards that are right-swiped are saved for the comparison page.

On the comparison page, users can easily compare saved flights, and click through to purchase tickets for their favorite flight.
## How we built it
### Backend
We used the RapidAPI HUB to find the API, used PostMan to test the endpoints, then we used axios to fetch the data in the react app.
### Frontend
The frontend is built with React, and uses a node package called react-tinder-card to build the swipe-able cards.
## Challenges we ran into
- Finding a free/low-cost API with relatively easy to parse data was a small challenge, but we found one!
- There were some dependency graph issues with the react-tinder-card package, but after some searching, we were able to get it working.
- There were some issues with using dotenv with the current version of `create-react-app`. Some refactoring let us get around that issue.
## Accomplishments that we're proud of
We're particularly proud of the name of our project. It's a triple-entendre, combining "flight deck", "tech stack", and "stack of cards" into a catchy title for a web app.
## What we learned
- We learned how to use the TripAdvisor RapidAPI client.
- We learned more about working with React and Node.js, and integrating Axios with React.
- We learned about working with React packages.
- CSS knowledge is always expanding.
## What's next for Flight Stack
We would like to eventually host the application on our `flightstack.tech` domain, and add validation to the form inputs.
