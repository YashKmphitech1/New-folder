import React from "react"
import { Redirect } from "react-router-dom"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

//  // Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login"
import Register1 from "../pages/AuthenticationInner/Register"
import Recoverpw from "../pages/AuthenticationInner/Recoverpw"
import ForgetPwd1 from "../pages/AuthenticationInner/ForgetPassword"

// Dashboard
import Dashboard from "../pages/Dashboard/index"

//Tables
import DatatableTables from "../pages/Tables/DatatableTables"
//Pages
import PagesMaintenance from "../pages/Utility/pages-maintenance"
import PagesComingsoon from "../pages/Utility/pages-comingsoon"
import PagesFaqs from "../pages/Utility/pages-faqs"
import Pages404 from "../pages/Utility/pages-404"
import Pages500 from "../pages/Utility/pages-500"

const userRoutes = [
  { path: "/dashboard", component: Dashboard },

  // //profile
  { path: "/profile", component: UserProfile },

  // Tables
  { path: "/tables-datatable", component: DatatableTables },

  //Utility
  { path: "/pages-faqs", component: PagesFaqs },
  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [
  // { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  // { path: "/forgot-password", component: ForgetPwd },
  // { path: "/register", component: Register },

  { path: "/pages-maintenance", component: PagesMaintenance },
  { path: "/pages-comingsoon", component: PagesComingsoon },
  { path: "/pages-404", component: Pages404 },
  { path: "/pages-500", component: Pages500 },

  // Authentication Inner
  { path: "/pages-login", component: Login1 },
  // { path: "/pages-register", component: Register1 },
  // { path: "/page-recoverpw", component: Recoverpw },
  // { path: "/pages-forgot-pwd", component: ForgetPwd1 },
]

export { userRoutes, authRoutes }
