import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Documentation from "../documentation/Documentation";
import ForIndustry from "../for-industry/ForIndustry";
import Home from "../Home/Home";
import News from "../News/News";
import Software from "../software/Software";
import NotFound from "./../Not-Found/not-found";
import Hardware from "../hardware/Hardware";
import Contact from "../FooterLinks/Contact";
import TrademarkRules from "./../FooterLinks/TrademarkRules";
import AboutUs from "./../FooterLinks/AboutUs";
import Jobs from "./../FooterLinks/Jobs";
import Accessibility from "./../FooterLinks/Accessibility";
import Cookie from "./../FooterLinks/Cookie";
import Licensing from "./../FooterLinks/Licensing";
import Terms from "./../FooterLinks/Terms";
import Privacy from "./../FooterLinks/Privacy";
import Security from "./../FooterLinks/Security";
import ThinClients from "./../for-industry/comps/ThinClients";
import IntegratorProgramme from "./../for-industry/comps/IntegratorProgramme";
import DesignPatterns from "./../for-industry/comps/DesignPatterns";
import OperatingSystems from "./../software/comps/OperatingSystems";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="for-industry" element={<ForIndustry />} />
      <Route path="for-industry/thin-clients" element={<ThinClients />} />
      <Route
        path="for-industry/integrator-programme"
        element={<IntegratorProgramme />}
      />
      <Route path="for-industry/design-partners" element={<DesignPatterns />} />
      <Route
        path="/software/operating-systems"
        element={<OperatingSystems />}
      />
      <Route path="products/" element={<Hardware />} />
      <Route path="software/" element={<Software />} />
      <Route path="documentation/*" element={<Documentation />}></Route>
      <Route path="news/*" element={<News />} />
      <Route path="contact" element={<Contact />} />
      <Route path="trademark-rules" element={<TrademarkRules />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="jobs" element={<Jobs />} />
      <Route path="accessibility" element={<Accessibility />} />
      <Route path="cookies" element={<Cookie />} />
      <Route path="licensing" element={<Licensing />} />
      <Route path="terms-conditions-sale" element={<Terms />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="security" element={<Security />} />
      <Route exact path="/" element={<Home />} />
      {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
      <Route path="not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
