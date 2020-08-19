# mismatch.com
deployed at: https://mismatch-me.herokuapp.com/

## Introduction and User Stories
In thinking about this project, I decided to try building something unlike anything else I've tried before. I settled on a dating app that is somewhat of a cross between match.com and tinder, based on the idea that sometimes opposites attract or that at the very least it's important to talk to people with different opinions from you. The app requires login, which authenticates you both on the backend and creates an account that is used to populate and access the real-time chat database. "Cards" are toggleable and can be clicked through. When the user chooses a question and answer, they are directed to the chatroom dedicated to that card and their response is recorded. At any time, the user can abandon their chat, clearing the chat history.

## Approach
I began the process of building mismatch.com by breaking it down into individual pages and react components, creating the wireframe below:
![mismatch](/public/mismatch.pdf)

I built the entire frontend before generating the Django backend with authentication and built out the Firebase chat last.

## Technologies Used
### Full Stack Application Utilizing the Following Structures and Technologies:
- Django/Python backend with Postgres 
- REST routes and CRUD routing
- User Authentication Via JWT and Django
- Firebase real-time databases
- React 

## Future Steps
- cap chat rooms at two people, currently unlimited people can join any given card as long as they're authenticated
- if any user abandons the chat, all message nodes from the converstation are erased to prevent long-term overcrowding of the database (this is an issue if more than two people are in the room and one leaves)
- responsive design for mobile

## Credit:
https://css-tricks.com/building-a-real-time-chat-app-with-react-and-firebase/  (implementing real-time chat with firebase)
https://codepen.io/AliKlein/pen/gopBao (inspiration for the card toggling display)
https://github.com/sabinbajracharya/react-chat-bubble (visual representation of chats, with edits)