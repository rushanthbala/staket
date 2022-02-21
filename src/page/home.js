import * as React from "react";
import { makeStyles, ThemeProvider } from "@mui/styles";
// import { createStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { ListItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import Logo from "../assect/images/logo.png";
import CultivationTracking from "../components/layout/cultivationTracking/index";
import { ReactComponent as Dashboard } from "../assect/svg/dashboard.svg";
import { ReactComponent as Analytics } from "../assect/svg/analytics.svg";
import { ReactComponent as Customers } from "../assect/svg/customers.svg";
import { ReactComponent as Message } from "../assect/svg/message.svg";
import { ReactComponent as Products } from "../assect/svg/products.svg";
import { ReactComponent as Profile } from "../assect/svg/profile.svg";
import { ReactComponent as Settings } from "../assect/svg/settings.svg";
import { ReactComponent as Traffic } from "../assect/svg/traffic icon.svg";
import { useLocation } from "react-router-dom";

const drawerWidth = 250;
const useStyles = makeStyles(
  {
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
    Root: {
      padding: "4px",
      color: "#809FB8",
      fill: "#809FB8",
      borderRadious: "10px !important",
      "&:hover": {
        backgroundColor: "#3B9161",
        opacity: "0.8",
        cursor: "pointer",
        borderRadius: "10px",
        color: "#fff",
        "& $svg": {
          color: "#FFF !important",
          fill: "#FFF !important",
        },
      },
    },
    ActiveLink: {
      backgroundColor: "#3B9161 !important ",
      cursor: "pointer",
      borderRadius: "10px",
      color: "#fff",
      "& $svg": {
        color: "#FFF !important",
        fill: "#FFF !important",
      },
    },
    list: {
      padding: "6px 4px !important",
      fontSize: "22px !important",
    },
    selected: {
      color: "red !important",
    },
    Notification: {
      color: "#809FB8 !important",
      paddingLeft: "26px !important",
      fontSize: "16px !important",
      // fontSize: "24px !important",
      margin: "22px 0px !important",
      letterSpacing: "2.4px !important",
      fontWeight: "600 !important ",
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
      fontSize: "18px",
    },
    CopyRightPara: {
      color: "#809FB8",
      fontSize: "14px",
    },
    ListPrimary: {
      fontSize: "17px !important",
    },
  },
  { index: 1 }
);
export default function Home() {
  const location = useLocation();
  console.log(location.pathname);
  const classes = useStyles();
  const navLists = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Dashboard,
    },
    {
      title: "Product",
      href: "/product",
      icon: Analytics,
    },
    {
      title: "Products",
      href: "/products",
      icon: Products,
    },
    {
      title: "Customer",
      href: "/customer",
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
      href: "/Profile",
      icon: Profile,
    },
    {
      title: "inbox",
      href: "/inbox",
      icon: Message,
    },
    {
      title: "Setting",
      href: "/setting",
      icon: Settings,
    },
  ];
  return (
    <ThemeProvider>
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItem: "space-between",
            }}
          >
            <div>
              {/* <div> */}
              <img className={classes.logo} src={Logo} alt="staket" />
              {/* </div> */}
              <div>
                {navLists &&
                  navLists.map((text, index) => (
                    <List
                      classes={{ root: classes.list }}
                      key={index}
                      className={true && "ActiveLink"}
                    >
                      <ListItem
                        key={text}
                        classes={
                          location.pathname !== text.href
                            ? { root: classes.Root, selected: classes.selected }
                            : {
                                root: classes.ActiveLink,
                                selected: classes.selected,
                              }
                        }
                      >
                        <ListItemIcon className={classes.ListItemIcon}>
                          <text.icon style={{ color: "red" }} />
                        </ListItemIcon>
                        <ListItemText
                          classes={{ primary: classes.ListPrimary }}
                          primary={text.title}
                        />
                      </ListItem>
                    </List>
                  ))}
              </div>
              <Typography className={classes.Notification}>
                NOTIFICATION
              </Typography>
              <div classes={{ root: classes.list }}>
                {navLists2 &&
                  navLists2.map((text, i) => (
                    <List
                      classes={{ root: classes.list }}
                      key={i}
                      className={true && "ActiveLink"}
                    >
                      <ListItem
                        key={text}
                        classes={
                          location.pathname !== text.href
                            ? { root: classes.Root, selected: classes.selected }
                            : {
                                root: classes.ActiveLink,
                                selected: classes.selected,
                              }
                        }
                      >
                        <ListItemIcon className={classes.ListItemIcon}>
                          <text.icon style={{ color: "red" }} />
                        </ListItemIcon>
                        <ListItemText
                          classes={{ primary: classes.ListPrimary }}
                          primary={text.title}
                        />
                      </ListItem>
                    </List>
                  ))}
              </div>
            </div>
            {/* <Toolbar /> */}
            <Box sx={{ m: 1, padding: "10px" }}>
              <div className={classes.CopyRight}> © 2021 STAKET</div>
              <div className={classes.CopyRightPara}>
                Driving data transparency for Industries in need
              </div>
            </Box>
          </div>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            p: 3,
            flexDirection: "column !important",
          }}
          className={classes.main}
        >
          <CultivationTracking />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
