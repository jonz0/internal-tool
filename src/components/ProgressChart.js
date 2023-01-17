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
import UserPool from "../UserPool";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {},
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

function getLabels() {
  const current = new Date();
  current.setMonth(current.getMonth() - 12);
  let labels = [];
  for (let i = 0; i < 12; i++) {
    current.setMonth(current.getMonth() + 1);
    labels.push(
      current.toLocaleString("default", { month: "long" }) +
        " " +
        current.getFullYear()
    );
  }
  return labels;
}

export default function ProgressChart() {
  const [labels, setLabels] = useState([]);
  const [hours, setHours] = useState({});

  useEffect(() => {
    setLabels(getLabels());
    setHours(getHours());
  }, []);

  async function getHours() {
    let jjHours = [];
    let llHours = [];
    let kbHours = [];

    const current = new Date();
    current.setMonth(current.getMonth() - 12);
    for (let i = 0; i < 12; i++) {
      current.setMonth(current.getMonth() + 1);
      const queryHours = await API.graphql({
        query: queries.getUserMonth,
        variables: {
          id:
            current.getMonth() +
            1 +
            "-" +
            current.getFullYear() +
            "-" +
            UserPool.getCurrentUser().username,
        },
      });

      if (queryHours.data.getUserMonth != null) {
        jjHours.push(queryHours.data.getUserMonth.jj);
        llHours.push(queryHours.data.getUserMonth.ll);
        kbHours.push(queryHours.data.getUserMonth.kb);
      } else {
        jjHours.push(0);
        llHours.push(0);
        kbHours.push(0);
      }
    }
    setHours({ jj: jjHours, ll: llHours, kb: kbHours });
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Jiu-Jitsu",
        data: hours.jj,
        backgroundColor: "#e85a5a",
        stack: "Stack 0",
      },
      {
        label: "Luta Livre",
        data: hours.ll,
        backgroundColor: "#79d2f2",
        stack: "Stack 0",
      },
      {
        label: "Kickboxing",
        data: hours.kb,
        backgroundColor: "#f7da4a",
        stack: "Stack 1",
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data} className={styles.barChart} />
    </div>
  );
}
