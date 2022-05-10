import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import CurrencyYuanIcon from "@mui/icons-material/CurrencyYuan";

import { Card, CardContent, ListItemSecondaryAction } from "@mui/material";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function AssetsToBuy() {
  const [dense, setDense] = React.useState(false);

  const currencies = [
    {
      name: "Bitcoin",
      shortHand: "BTC",
      value: "$ 49,148.22",
      change: "4.63%",
      positive: true,
      icon: CurrencyBitcoinIcon,
    },
    {
      name: "Ethereum",
      shortHand: "ETH",
      value: "$ 3,995.16",
      change: "0.42%",
      positive: false,
      icon: CurrencyYuanIcon,
    },
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Typography sx={{ mb: 2 }} variant="h6" component="div">
              Select assets to buy
            </Typography>
            <Demo>
              <List dense={dense}>
                {currencies.map((currency) => {
                  return (
                    <ListItem key={currency.shortHand}>
                      <ListItemAvatar>
                        <Avatar>
                          <currency.icon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={currency.name}
                        secondary={currency.shortHand}
                      />
                      <ListItemSecondaryAction>
                        <ListItemText
                          style={{ textAlign: "end" }}
                          primary={currency.value}
                          secondary={`${currency.positive ? "+" : "-"} ${
                            currency.change
                          }`}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                })}
              </List>
            </Demo>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
