"use client";

import { useEffect, useState } from "react";
import { getAllUsers } from "../api/users";
import { UserData } from "../types/user";
import { List, ListItemText } from "@mui/material";

export default function About() {
  const [usersList, setUsersList] = useState<UserData[]>([]);
  useEffect(() => {
    getAllUsers().then((response) => {
      return setUsersList(response);
    });
  }, []);

  if (!usersList) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <List sx={{ display: "flex", flexDirection: "column" }}>
        {usersList.map((user) => (
          <ListItemText primary={user.name} />
        ))}
      </List>
    </main>
  );
}
