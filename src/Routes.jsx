import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Careerspage from "pages/Careerspage";
import ContactForm from "pages/ContactForm";
import Banner2home from "pages/Banner2home";
import Aboutus from "pages/Aboutus";
import AllSolutionsPage from "pages/AllSolutionsPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "careerspage",
      element: <Careerspage />,
    },
    {
      path: "contactform",
      element: <ContactForm />,
    },
    {
      path: "banner2home",
      element: <Banner2home />,
    },
    {
      path: "aboutus",
      element: <Aboutus />,
    },
    {
      path: "allsolutionspage",
      element: <AllSolutionsPage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
