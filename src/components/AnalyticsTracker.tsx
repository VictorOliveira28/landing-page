import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-7TVBW74E50"; 
ReactGA.initialize(TRACKING_ID);

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {

    ReactGA.send({ 
      hitType: "pageview", 
      page: location.pathname + location.search,
      title: document.title
    });
  }, [location]);

  return null;
};

export default AnalyticsTracker;