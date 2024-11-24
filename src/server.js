import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import createSupabaseClient from "./config/database.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3005;

app.get("/api/users", async (req, res) => {
  const authorization = req.headers.authorization;
  try {
    const supabase = createSupabaseClient(authorization);
    const { data, error } = await supabase.from("users").select(`first_name,
        last_name,
        email,
        user_profiles( date_of_birth, bio)`);

    if (error) {
      throw error;
    }
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
