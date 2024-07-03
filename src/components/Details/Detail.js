import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";
import Typography from "@mui/material/Typography";

import { Doughnut } from "react-chartjs-2";

import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

import { expenseCategories, incomeCategories } from "../../data/categories";

Chart.register(ArcElement, Tooltip, Legend);

const Detail = ({ title }) => {
  const categories = title === "Expense" ? expenseCategories : incomeCategories;

  const data = {
    labels: categories.map((category) => category.type),
    datasets: [
      {
        data: categories.map((category) => category.amount),
        backgroundColor: categories.map((category) => category.color),
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div
      style={{
        borderBottom: `10px solid ${title === "Expense" ? "red" : "blue"}`,
      }}
    >
      <Card>
        <CardHeader title={title} />
        <CardContent>
          <Typography variant="h5">900$</Typography>

          {/* Chart */}
          <Doughnut data={data} width="100%" height="100px" />
        </CardContent>
      </Card>
    </div>
  );
};

export default Detail;
