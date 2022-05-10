import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FolderIcon from "@mui/icons-material/Folder";
import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MyAssets = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const availableCash = {
    currency: "USD",
    amount: "$ 0.00",
    icon: PaidIcon,
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Your Assets" {...a11yProps(0)} />
            <Tab label="Transaction History" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <List>
                <ListItem key={availableCash.currency}>
                  <ListItemAvatar>
                    <Avatar>
                      <availableCash.icon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Cash"
                    secondary={availableCash.currency}
                  />
                  <ListItemSecondaryAction>
                    <ListItemText
                      style={{ textAlign: "end" }}
                      primary={availableCash.amount}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Second tab
        </TabPanel>
      </Box>
    </>
  );
};

export default MyAssets;
