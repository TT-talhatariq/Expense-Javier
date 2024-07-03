import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";

const Main = () => {
  return (
    <Card>
      <CardHeader title="Expense Tracker" />

      <CardContent align="center">
        <Typography variant="h5">Total Balance $(balance)</Typography>

        <h1>Form</h1>
      </CardContent>
      <Divider />

      {/* List */}

      <CardContent align="center">
        <h1>List</h1>
      </CardContent>
    </Card>
  );
};

export default Main;
