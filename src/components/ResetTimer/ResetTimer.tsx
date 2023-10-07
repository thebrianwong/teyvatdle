import { useEffect, useState } from "react";
import AnimatedValue from "../AnimatedValue/AnimatedValue";

const ResetTimer = () => {
  const [hoursTens, setHoursTens] = useState<string>("X");
  const [hoursOnes, setHoursOnes] = useState<string>("X");
  const [minutesTens, setMinutesTens] = useState<string>("X");
  const [minutesOnes, setMinutesOnes] = useState<string>("X");
  const [secondsTens, setSecondsTens] = useState<string>("X");
  const [secondsOnes, setSecondsOnes] = useState<string>("X");

  useEffect(() => {
    const pacificMidnight = new Date(
      new Date().toLocaleString("en", { timeZone: "America/Los_Angeles" })
    );
    pacificMidnight.setHours(24, 0, 0, 0);

    const intervalId = setInterval(() => {
      const pacificCurrent = new Date(
        new Date().toLocaleString("en", { timeZone: "America/Los_Angeles" })
      );
      const timeDifference =
        (pacificMidnight.getTime() - pacificCurrent.getTime()) / 1000;
      const h = Math.floor(timeDifference / 3600).toString();
      const m = Math.floor((timeDifference % 3600) / 60).toString();
      const s = ((timeDifference % 3600) % 60).toString();
      if (h.length === 2) {
        setHoursTens(h[0]);
        setHoursOnes(h[1]);
      } else {
        setHoursTens("0");
        setHoursOnes(h);
      }
      if (m.length === 2) {
        setMinutesTens(m[0]);
        setMinutesOnes(m[1]);
      } else {
        setMinutesTens("0");
        setMinutesOnes(m);
      }
      if (s.length === 2) {
        setSecondsTens(s[0]);
        setSecondsOnes(s[1]);
      } else {
        setSecondsTens("0");
        setSecondsOnes(s);
      }
      // reload the page if a user actually ends up waiting for reset
      if (h === "0" && m === "0" && s === "0") {
        window.location.reload();
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p>
      In <AnimatedValue value={hoursTens} direction="down" />
      <AnimatedValue value={hoursOnes} direction="down" />
      {":"}
      <AnimatedValue value={minutesTens} direction="down" />
      <AnimatedValue value={minutesOnes} direction="down" />
      {":"}
      <AnimatedValue value={secondsTens} direction="down" />
      <AnimatedValue value={secondsOnes} direction="down" />
    </p>
  );
};

export default ResetTimer;
