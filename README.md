# Approach

1. I set up a postgres database on render.com
2. Using psql, I initalized some sample data.
3. I initalized a new git repo that would be the backend for the database, so that the frontend can be built on the backend instead of directly on the database.
4. I created database.js that specified how to connect to the database.
5. I created server.js which includes the Express endpoints for the frontend to interact with the database.
6. I hooked up the frontend to the backend.

# Key Takeaways

- Use a backend to connect the frontend to the database.
- Concept of microservices, different server hosting different parts of the application.
- Use environment variables to store sensitive information.

# Challenges

- Figuring out how to interface the frontend with the backend.
