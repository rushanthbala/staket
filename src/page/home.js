import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Logo from "../assect/images/logo.png";
import { makeStyles } from "@mui/styles";
import { createStyles } from "@material-ui/core";
import CultivationTracking from "../components/layout/cultivationTracking/index";
import {ReactComponent as  Dashboard} from "../assect/svg/dashboard.svg";
const drawerWidth = 240;
const useStyles = makeStyles(() =>
  createStyles({
    logo: {
      width: "200px",
      padding: '10px',
      marginTop:'20px'
    },
    ListItemIcon: {
      minWidth: "38px !important",
      margin: "0px !important",
      color: "#809FB8 !important",
    },
    root: {
      color: "#809FB8",
      borderRadious: "10px !important",
      "&:hover": {
        backgroundColor: "#3B9161",
        borderRadius: "10px",
        color: "#fff",
        "& $svg": {
          color: "#FFF !important",
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
      icon: InboxIcon,
    },
    {
      title: "Customer",
      href: "/",
      icon: InboxIcon,
    },
    {
      title: "Cultivation Tracking",
      href: "/",
      icon: InboxIcon,
    },
  ];
  const navLists2 = [
    {
      title: "Profile",
      href: "/",
      icon: InboxIcon,
    },
    {
      title: "inbox",
      href: "/",
      icon: InboxIcon,
    },
    {
      title: "Setting",
      href: "/",
      icon: InboxIcon,
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
                <text.icon />
                <Dashboard/>
              </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItem>
          ))}
        </List>
        <Typography className={classes.Notification}>NOTIFICATION </Typography>
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
