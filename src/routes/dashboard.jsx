import Dashboard from "views/Dashboard/Dashboard";
import UserProfile from "views/UserProfile/UserProfile";
import TableList from "views/TableList/TableList";
import Typography from "views/Typography/Typography";
import Icons from "views/Icons/Icons";
import Maps from "views/Maps/Maps";
import Notifications from "views/Notifications/Notifications";
// import Upgrade from "views/Upgrade/Upgrade";

import BlockList from "views/BlockList/BlockList";

const dashboardRoutes = [

  {
    path: "/blockList",
    name: "블록 목록 조회",
    icon: "pe-7s-server",
    component: BlockList
  },
  {
    path: "/dashboard",
    name: "노드 모니터링",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile
  },
  {
    path: "/table",
    name: "Table List",
    icon: "pe-7s-note2",
    component: TableList
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: Typography
  },
  { path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
  { path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications
  },
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "pe-7s-rocket",
  //   component: Upgrade
  // },
  {
    path: "/test/:id",
    name: "test",
    icon: "pe-7s-graph",
    component: Dashboard,
    subPage: true,
    parentPath: "/blockList"
  },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
