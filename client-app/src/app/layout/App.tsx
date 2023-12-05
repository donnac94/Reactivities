import { useEffect, useState } from "react";
import "./App.tsx";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { Activity } from "../models/activity.ts";
import NavBar from "./NavBar.tsx";
import ActivityDashboard from "../../Features/activity/dashboard/ActivityDashboard.tsx";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectActivity, setSelectedActivity] = useState<Activity | undefined>(
    undefined
  );

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        console.log(response);
        setActivities(response.data);
      });
  }, []);

  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find((x) => x.id === id));
  }
  setSelectedActivity(undefined);

  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }

  return (
    <div>
      <NavBar />
      <Container style={{ marginTop: "7em" }}></Container>
      <ActivityDashboard
        activities={activities}
        selectedActivity={selectActivity}
        selectActivity={handleSelectActivity}
        cancelSelectActivity={handleCancelSelectActivity}
      />
    </div>
  );
}

export default App;
