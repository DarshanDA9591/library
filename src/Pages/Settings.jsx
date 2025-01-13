import React from "react";
import { Box, Typography, Switch, FormControl, InputLabel, Select, MenuItem, Divider, Grid } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SecurityIcon from "@mui/icons-material/Security";
import PaletteIcon from "@mui/icons-material/Palette";

const Settings = () => {
  const [theme, setTheme] = React.useState("light");
  const [notifications, setNotifications] = React.useState(true);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const handleNotificationToggle = () => {
    setNotifications(!notifications);
  };

  return (
    <Box sx={{ p: 4, maxWidth: "800px", mx: "auto", mt: 4, boxShadow: 3, borderRadius: 2, bgcolor: "background.paper" }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", textAlign: "center", mb: 3 }}>
        Settings
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <Grid container spacing={4}>
        {/* Notifications Section */}
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <NotificationsIcon sx={{ color: "primary.main", mr: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: "medium" }}>
              Notifications
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography>Enable Notifications</Typography>
            <Switch checked={notifications} onChange={handleNotificationToggle} color="primary" />
          </Box>
        </Grid>

        {/* Theme Section */}
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <PaletteIcon sx={{ color: "secondary.main", mr: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: "medium" }}>
              Appearance
            </Typography>
          </Box>
          <FormControl fullWidth>
            <InputLabel></InputLabel>
            <Select value={theme} onChange={handleThemeChange}>
              <MenuItem value="light">Light</MenuItem>
              <MenuItem value="dark">Dark</MenuItem>
              <MenuItem value="system">System Default</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Security Section */}
        <Grid item xs={12}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <SecurityIcon sx={{ color: "error.main", mr: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: "medium" }}>
              Security
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Enable Two-Factor Authentication for added security.
          </Typography>
          <Switch color="error" />
        </Grid>
      </Grid>
    </Box>
  );
  };
  
  export default Settings;