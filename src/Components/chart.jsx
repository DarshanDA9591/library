import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

const ChartUse = () => {
  // Sample Data 
  const data = [
    { course: "MCA", borrowed: 45 },
    { course: "BCA", borrowed: 38 },
    { course: "PUC", borrowed: 60 },
    { course: "PHD", borrowed: 20 },
    { course: "CHEMISTRY", borrowed: 30 },
    { course: "MATHEMATICS", borrowed: 50 },
    { course: "PHYSICS", borrowed: 40 },
  ];

  return (
    <Box sx={{ p: 4, mt: 4, maxWidth: "900px", mx: "auto" }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center", fontWeight: "bold", mb: 4 }}>
        Library Report
      </Typography>

      <Grid container spacing={4}>
        {/* Chart Section */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "medium", mb: 3 }}>
              Books Borrowed by Courses
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="course" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="borrowed" fill="#118CF0" name="Books Borrowed" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChartUse;
