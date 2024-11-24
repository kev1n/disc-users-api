# Approach

1. I created a supabase database and initalized some sample data on the frontend as well as the schema of the database.
2. I adjusted the existing express server to connect to the supabase database.
3. I hooked up the frontend to the backend via the same authorization token that the frontend uses to access the database.
4. Magic

# Key Takeaways

- How to use supabase.
- How to have frontend and backend communicate with each other.
- Benefits of ORM (though I don't think supabase is an ORM)

# Challenges

- How to transfer over the authorization from the frontend to the backend. I read through a bunch of docs and figured out that all I needed was to transmit the same authorization token that the frontend uses to access the database.
