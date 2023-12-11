import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from '../layout/App';
import ActivityDashboard from "../../Features/activity/dashboard/ActivityDashboard";
import ActivityForm from "../../Features/activity/dashboard/form/ActivityForm";
import HomePage from "../../Features/home/HomePage";
import ActivityDetails from "../../Features/activity/details/ActivityDetails";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "activities", element: <ActivityDashboard /> },
      { path: "activities/:id", element: <ActivityDetails /> },
      { path: "createActivity", element: <ActivityForm /> },
      { path: "manage/:id", element: <ActivityForm /> },
    ],
  },
];

export const router = createBrowserRouter(routes);