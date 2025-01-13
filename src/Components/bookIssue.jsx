import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  MenuItem,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const BorrowBookForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    studentID: "",
    bookName: "",
    bookCategory: "",
    borrowDate: dayjs(),
    returnDate: null,
  });

  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Science",
    "Technology",
    "Mathematics",
    "History",
    "Literature",
  ];

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Borrow Record:", formData);

    // Reset the form
    setFormData({
      studentName: "",
      studentID: "",
      bookName: "",
      bookCategory: "",
      borrowDate: dayjs(),
      returnDate: null,
    });
  };

  return (
    <Box sx={{ p: 4, maxWidth: "800px", mx: "auto", mt: 4 }}>
      <Paper
        sx={{
          p: 4,
          boxShadow: 4,
          borderRadius: 3,
          bgcolor: "#f7faff",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#118CF0",
            mb: 3,
          }}
        >
          Library Borrowing Record
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Student Name */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Student Name"
                variant="outlined"
                fullWidth
                value={formData.studentName}
                onChange={(e) => handleChange("studentName", e.target.value)}
                required
              />
            </Grid>

            {/* Student ID */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Student ID"
                variant="outlined"
                fullWidth
                value={formData.studentID}
                onChange={(e) => handleChange("studentID", e.target.value)}
                required
              />
            </Grid>

            {/* Book Name */}
            <Grid item xs={12}>
              <TextField
                label="Book Name"
                variant="outlined"
                fullWidth
                value={formData.bookName}
                onChange={(e) => handleChange("bookName", e.target.value)}
                required
              />
            </Grid>

            {/* Book Category */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Book Category"
                variant="outlined"
                select
                fullWidth
                value={formData.bookCategory}
                onChange={(e) => handleChange("bookCategory", e.target.value)}
                required
              >
                {bookCategories.map((category, index) => (
                  <MenuItem key={index} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Borrow Date */}
            <Grid item xs={12} md={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Borrow Date"
                  value={formData.borrowDate}
                  onChange={(date) => handleChange("borrowDate", date)}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Grid>

            {/* Return Date */}
            <Grid item xs={12} md={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Return Date"
                  value={formData.returnDate}
                  onChange={(date) => handleChange("returnDate", date)}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: "#118CF0",
                  color: "#ffffff",
                  "&:hover": { bgcolor: "#0f7ad8" },
                }}
              >
                Record Entry
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default BorrowBookForm;
