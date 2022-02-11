import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
import Logo from "../assect/images/logo.png";
import { makeStyles } from "@mui/styles";
import { createStyles, Toolbar } from "@material-ui/core";
import CultivationTracking from "../components/layout/cultivationTracking/index";
import { ReactComponent as Dashboard } from "../assect/svg/dashboard.svg";
import { ReactComponent as Analytics } from "../assect/svg/analytics.svg";
import { ReactComponent as Customers } from "../assect/svg/customers.svg";
import { ReactComponent as Message } from "../assect/svg/message.svg";
import { ReactComponent as Products } from "../assect/svg/products.svg";
import { ReactComponent as Profile } from "../assect/svg/profile.svg";
import { ReactComponent as Settings } from "../assect/svg/settings.svg";
import { ReactComponent as Traffic } from "../assect/svg/traffic icon.svg";
const drawerWidth = 240;
const useStyles = makeStyles(() =>
  createStyles({
    logo: {
      width: "200px",
      padding: "10px",
      marginTop: "20px",
    },
    ListItemIcon: {
      minWidth: "38px !important",
      margin: "0px !important",
      color: "#809FB8 !important",
    },
    root: {
      color: "#809FB8",
      fill: "#809FB8",
      borderRadious: "10px !important",
      "&:hover": {
        backgroundColor: "#3B9161",
        borderRadius: "10px",
        color: "#fff",
        "& $svg": {
          color: "#FFF !important",
          fill: "#FFF !important",
        },
      },
    },
    list: {
      padding: "10px !important",
    },
    selected: {
      color: "red !important",
    },
    Notification: {
      color: "#809FB8 !important",
      paddingLeft: "26px !important",
      fontSize: "12px !important",
    },
    paper: {
      border: "none",
      borderRight: "none !important",
      backgroundColor: "#F4F4F4 !important",
    },
    main: {
      height: "auto",
      borderRadius: "40px",
      marginTop: "10px",
      marginRight: "10px",
      padding: "10px 10px 0px 20px !important",
    },
    CopyRight: {
      color: "#06152B",
      fontWeight: "500",
    },
    CopyRightPara: {
      color: "#809FB8",
    },
  })
);
export default function Home() {
  const classes = useStyles();
  const navLists = [
    {
      title: "Dashboard",
      href: "/",
      icon: Dashboard,
    },
    {
      title: "Product",
      href: "/",
      icon: Analytics,
    },
    {
      title: "Products",
      href: "/",
      icon: Products,
    },
    {
      title: "Customer",
      href: "/",
      icon: Customers,
    },
    {
      title: "Cultivation Tracking",
      href: "/",
      icon: Traffic,
    },
  ];
  const navLists2 = [
    {
      title: "Profile",
      href: "/",
      icon: Profile,
    },
    {
      title: "inbox",
      href: "/",
      icon: Message,
    },
    {
      title: "Setting",
      href: "/",
      icon: Settings,
    },
  ];
  return (
    <Box
      sx={{ display: "flex" }}
      style={{ backgroundColor: "#F4F4F4 !important" }}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        style={{ border: "none" }}
        classes={{
          paper: classes.paper,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItem: "space-between",
          }}
        >
          <div>
            <div>
              <img className={classes.logo} src={Logo} alt="staket" />
            </div>
            <List classes={{ root: classes.list }}>
              {navLists.map((text, index) => (
                <ListItem
                  key={text}
                  classes={{ root: classes.root, selected: classes.selected }}
                >
                  <ListItemIcon className={classes.ListItemIcon}>
                    <text.icon style={{ color: "red" }} />
                  </ListItemIcon>
                  <ListItemText primary={text.title} />
                </ListItem>
              ))}
            </List>
            <Typography className={classes.Notification}>
              NOTIFICATION{" "}
            </Typography>
            <List classes={{ root: classes.list }}>
              {navLists2.map((text, index) => (
                <ListItem
                  key={text}
                  classes={{ root: classes.root, selected: classes.selected }}
                >
                  <ListItemIcon className={classes.ListItemIcon}>
                    <text.icon />
                  </ListItemIcon>

                  <ListItemText primary={text.title} />
                </ListItem>
              ))}
            </List>
          </div>
          <Toolbar />
          <Box sx={{ m: 1, padding: "10px" }}>
            <div className={classes.CopyRight}> © 2021 STAKET</div>
            <div className={classes.CopyRightPara}>Driving data transparency for Industries in need</div>
          </Box>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        className={classes.main}
      >
        <CultivationTracking />
      </Box>
    </Box>
  );
}
