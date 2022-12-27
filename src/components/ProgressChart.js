import { useState, useEffect } from "react";
import {
  Button,
  ButtonGroup,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import styles from "../../styles/Profile.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
  maintainAspectRatio: false,
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [0, 1, 3, 4, 2, 4, 5, 9],
      backgroundColor: "#D6E9C6",
      stack: "Stack 0",
    },
    {
      label: "Dataset 2",
      data: [0, 12, 3, 6, 2, 4, 8, 9],
      backgroundColor: "#FAEBCC",
      stack: "Stack 0",
    },
    {
      label: "Dataset 3",
      data: [0, 1, 3, 4, 2, 4, 5, 9],
      backgroundColor: "#EBCCD1",
      stack: "Stack 1",
    },
  ],
};

export default function ProgressChart() {
  const [hour, setHours] = useState({
    jj: null,
    ll: null,
    kb: null,
  });

  const [belts, setBelts] = useState({
    jj: null,
    ll: null,
  });

  const [attributes, setAttributes] = useState({
    username: null,
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    freezeStart: null,
    freezeEnd: null,
    enroll: null,
    renew: null,
    active: null,
  });

  useEffect(() => {}, []);

  return (
    <div>
      <Bar options={options} data={data} className={styles.barChart} />
    </div>
  );
}
