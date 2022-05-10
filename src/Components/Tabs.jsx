import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CreditCard from "./CreditCard";
import AssetsToBuy from "../Pages/Assets/assets";
import MyAssets from "../Pages/MyAssets/myAssets";
import { Button, Card, CardContent, Grid } from "@mui/material";

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const cards = [
    {
      number: "9898767676565665",
      cvv: "434",
      issued: "02/22",
      expiry: "02/26",
      type: "visa",
    },
    {
      number: "8585645643354354",
      cvv: "989",
      issued: "02/20",
      expiry: "02/25",
      type: "mastercard",
    },
    {
      number: "6547474664856855",
      cvv: "234",
      issued: "12/20",
      expiry: "10/22",
      type: "jcb",
    },
    {
      number: "6547474664856855",
      cvv: "234",
      issued: "12/20",
      expiry: "10/22",
      type: "jcb",
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Credit Cards" {...a11yProps(0)} />
          <Tab label="Payments" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {cards.map((card, i = 1) => {
            return (
              <CreditCard
                key={i++}
                cardNumber={card.number}
                cardIssuedDate={card.issued}
                cardExpiryDate={card.expiry}
                cardCvv={card.cvv}
                cardType={card.type}
              />
            );
          })}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Card sx={{ minHeight: "64vh", position: "relative" }}>
              <CardContent>
                <AssetsToBuy />
              </CardContent>
              <Box m={1} display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    height: 40,
                    minWidth: "21em",
                  }}
                >
                  Done
                </Button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ minHeight: "64vh" }}>
              <CardContent>
                <MyAssets />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
    </Box>
  );
}
