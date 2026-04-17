import { useEffect } from "react";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-7TVBW74E50"; 
ReactGA.initialize(TRACKING_ID);

const AnalyticsTracker = () => {
  useEffect(() => {
    ReactGA.send({ 
      hitType: "pageview", 
      page: window.location.pathname + window.location.search,
      title: document.title
    });
  }, []);

  return null;
};

export default AnalyticsTracker;