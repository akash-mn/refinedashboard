import { AuthBindings, Authenticated, Refine } from "@refinedev/core";
import { DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import {
  DashboardOutlined,
  LocalOfferOutlined,
  EventRepeatOutlined,
  AccountCircleOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import {
  ErrorComponent,
  notificationProvider,
  RefineSnackbarProvider,
  ThemedLayoutV2,
} from "@refinedev/mui";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import routerBindings, {
  CatchAllNavigate,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import axios, { AxiosRequestConfig } from "axios";
import { ThemedHeaderV2 } from "components/layout/header";
import { ThemedSiderV2 } from "components/layout/sider";
import { ThemedTitleV2 } from "components/layout/title";
import { CredentialResponse } from "interfaces/google";
import { Login } from "pages/login";
import Home from "pages/dashboard/Home";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { parseJwt } from "utils/parse-jwt";
import { MuiInferencer } from "@refinedev/inferencer/mui";
import AddProfile from "pages/dashboard/AddProfile";

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (request.headers) {
    request.headers["Authorization"] = `Bearer ${token}`;
  } else {
    request.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return request;
});

function App() {
  const authProvider: AuthBindings = {
    login: async ({ credential }: CredentialResponse) => {
      const profileObj = credential ? parseJwt(credential) : null;

      // Save user to MongoDB
      if (profileObj) {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: profileObj.email,
            avatar: profileObj.picture,
          }),
        });
        const data = await response.json();
        if (response.status === 200) {
          localStorage.setItem(
            "user",
            JSON.stringify({
              ...profileObj,
              avatar: profileObj.picture,
              userid: data._id,
            })
          );

          localStorage.setItem("token", `${credential}`);
          return {
            success: true,
            redirectTo: "/",
          };
        } else {
          return Promise.reject();
        }
      }

      return {
        success: false,
      };
    },
    logout: async () => {
      const token = localStorage.getItem("token");

      if (token && typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        axios.defaults.headers.common = {};
        window.google?.accounts.id.revoke(token, () => {
          return {};
        });
      }

      return {
        success: true,
        redirectTo: "/login",
      };
    },
    onError: async (error) => {
      console.error(error);
      return { error };
    },
    check: async () => {
      const token = localStorage.getItem("token");

      if (token) {
        return {
          authenticated: true,
        };
      }

      return {
        authenticated: false,
        error: {
          message: "Check failed",
          name: "Token not found",
        },
        logout: true,
        redirectTo: "/login",
      };
    },
    getPermissions: async () => null,
    getIdentity: async () => {
      const user = localStorage.getItem("user");
      if (user) {
        return JSON.parse(user);
      }

      return null;
    },
  };

  return (
    <BrowserRouter>
      <RefineKbarProvider>
       
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider(`${process.env.REACT_APP_BASE_URL}/api/v1`)}
                notificationProvider={notificationProvider}
                routerProvider={routerBindings}
                authProvider={authProvider}
                resources={[
                  {
                    name: "dashboard",
                    options: { label: "Dashboard" },
                    list: AddProfile,
                    icon: <DashboardOutlined />,
                    // create: AddProfile,
                    // edit: "/blog-posts/edit/:id",
                    // show: "/blog-posts/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "Transaction",
                    list: MuiInferencer,
                    icon: <LocalOfferOutlined />,
                    // create: "/categories/create",
                    // edit: "/categories/edit/:id",
                    // show: "/categories/show/:id",
                    // meta: {
                    //   canDelete: true,
                    // },
                  },
                  {
                    name: "Schedule",
                    list: MuiInferencer,
                    icon: <EventRepeatOutlined />,
                    // create: "/categories/create",
                    // edit: "/categories/edit/:id",
                    // show: "/categories/show/:id",
                    // meta: {
                    //   canDelete: true,
                    // },
                  },
                  {
                    name: "User",
                    list: MuiInferencer,
                    icon: <AccountCircleOutlined />,
                    // create: "/categories/create",
                    // edit: "/categories/edit/:id",
                    // show: "/categories/show/:id",
                    // meta: {
                    //   canDelete: true,
                    // },
                  },
                  {
                    name: "Setting",
                    list: MuiInferencer,
                    icon: <SettingsOutlined />,
                    // create: "/categories/create",
                    // edit: "/categories/edit/:id",
                    // show: "/categories/show/:id",
                    // meta: {
                    //   canDelete: true,
                    // },
                  },
                  {
                    name: "Setting",
                    list: MuiInferencer,
                    icon: <SettingsOutlined />,
                    // create: "/categories/create",
                    // edit: "/categories/edit/:id",
                    // show: "/categories/show/:id",
                    // meta: {
                    //   canDelete: true,
                    // },
                  },
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  projectId: "nchtG5-PjHeTL-TJNuZI",
                }}
              >
                <Routes>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-inner"
                        fallback={<CatchAllNavigate to="/login" />}
                      >
                        {/* <ThemedLayoutV2
                          Header={() => <ThemedHeaderV2 isSticky={true} />}
                        >
                          <Outlet />
                        </ThemedLayoutV2> */}
                        <ThemedLayoutV2
                          Header={ThemedHeaderV2}
                          Sider={ThemedSiderV2}
                          Title={ThemedTitleV2}
                        >
                          <Outlet />
                        </ThemedLayoutV2>
                      </Authenticated>
                    }
                  >
                    <Route
                      index
                      element={<NavigateToResource resource="dashboard" />}
                    />
                    <Route path="/dashboard">
                      <Route index element={<Home />} />
                      <Route path="/dashboard" element={<AddProfile/>} />
                      {/* <Route path="create" element={<BlogPostCreate />} />
                      <Route path="edit/:id" element={<BlogPostEdit />} />
                      <Route path="show/:id" element={<BlogPostShow />} /> */}
                    </Route>
                    {/* <Route
                      index
                      element={<NavigateToResource resource="blog_posts" />}
                    /> */}
                    {/* <Route path="/blog-posts">
                      <Route index element={<BlogPostList />} />
                      <Route path="create" element={<BlogPostCreate />} />
                      <Route path="edit/:id" element={<BlogPostEdit />} />
                      <Route path="show/:id" element={<BlogPostShow />} />
                    </Route> */}

                    <Route path="*" element={<ErrorComponent />} />
                  </Route>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-outer"
                        fallback={<Outlet />}
                      >
                        <NavigateToResource />
                      </Authenticated>
                    }
                  >
                    <Route path="/login" element={<Login />} />
                  </Route>
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                {/* <ThemedLayoutV2
                  Header={ThemedHeaderV2}
                  Sider={ThemedSiderV2}
                  Title={ThemedTitleV2}
                >
                </ThemedLayoutV2> */}
                {/* <DocumentTitleHandler /> */}
              </Refine>
              {/* <DevtoolsPanel /> */}
            </DevtoolsProvider>
          </RefineSnackbarProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
