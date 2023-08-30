import HomePage from "layout/web-application-design";
import React from "react";
import MobilePage from "views/_design/MobilePage";
const LogoDesign = React.lazy(() => import("views/_design/logo-design"));

const Home = React.lazy(() => import("../../views/_design"));
const Home2 = React.lazy(() => import("../../views/_design/HomePage2"));

const HowItWorks = React.lazy(() => import("../../views/_design/howItWorks"));
const ContactPage = React.lazy(() => import("../../views/_design/contact"));
const Packaging = React.lazy(() => import("../../views/_design/packaging"));

const EnterprisePlan = React.lazy(() =>
  import("../../views/_design/enterprisePlan")
);

const Checkout = React.lazy(() => import("../../views/_design/checkout"));
const CheckoutPayment = React.lazy(() =>
  import("../../views/_design/checkout/payment")
);

const GetADemo = React.lazy(() => import("../../views/_design/get-a-demo"));
const ThankYou = React.lazy(() => import("../../views/_design/thank-you"));
const Process = React.lazy(() => import("../../views/_design/process"));
const Services = React.lazy(() => import("../../views/_design/servicesPage"));
const OurWork = React.lazy(() => import("../../views/_design/ourWork"));

const NotFound = React.lazy(() =>
  import("../../views/_design/_error_pages/404")
);

const Category_GraphicDesign = React.lazy(() =>
  import("../../views/_design/category/graphic-design")
);
const Category_UIUX = React.lazy(() =>
  import("../../views/_design/category/ui-ux")
);

const OnDemand_Skeleton = React.lazy(() =>
  import("../../views/_design/on-demand/_")
);

const AllAccessDesign = React.lazy(() =>
  import("../../views/all-access/design")
);

const AboutUs_Page = React.lazy(() => import("../../views/_design/about-us"));
const Legal_PrivacyPolicy = React.lazy(() =>
  import("../../views/_design/terms")
);
const Legal_Terms = React.lazy(() =>
  import("../../views/_design/privacy-policy")
);

const routes = [
  {
    path: "/not-found",
    exact: true,
    name: "Not Found",
    component: NotFound,
  },

  {
    path: "/all-access/design",
    exact: true,
    name: "",
    component: AllAccessDesign,
  },
  {
    path: "/p/privacy-policy",
    exact: true,
    name: "Privacy Policy",
    component: Legal_PrivacyPolicy,
  },
  {
    path: "/p/terms",
    exact: true,
    name: "Terms & Conditions",
    component: Legal_Terms,
  },

  // {
  //     path: '/on-demand/one-dollar',
  //     exact: true,
  //     name: 'Ondemand OneDollar',
  //     component: OnDemand_OneDollar
  // },
  {
    path: "/on-demand/:slug",
    name: "Ondemand Services",
    component: OnDemand_Skeleton,
  },
  {
    path: "/c/graphic-design",
    exact: true,
    name: "Graphic Design",
    component: Category_GraphicDesign,
  },
  {
    path: "/c/ui-ux",
    exact: true,
    name: "UI & UX",
    component: Category_UIUX,
  },
  {
    path: "/how-it-works",
    exact: true,
    name: "How It Works",
    component: HowItWorks,
  },
  {
    path: "/enterprise-plan",
    exact: true,
    name: "Enterprise Plan",
    component: EnterprisePlan,
  },
  {
    path: "/checkout/payment",
    exact: true,
    name: "Checkout Payment",
    component: CheckoutPayment,
  },
  {
    path: "/checkout",
    exact: true,
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/v2",
    exact: true,
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    exact: true,
    name: "Home2",
    component: Home2,
  },
  {
    path: "/get-a-demo",
    exact: true,
    name: "Get a Demo",
    component: GetADemo,
  },
  {
    path: "/thank-you",
    exact: true,
    name: "Thanks You",
    component: ThankYou,
  },
  {
    path: "/process",
    exact: true,
    name: "Process",
    component: Process,
  },
  {
    path: "/services",
    exact: true,
    name: "services",
    component: Services,
  },
  {
    path: "/our-work",
    exact: true,
    name: "Our Work",
    component: OurWork,
  },
  {
    path: "/about",
    exact: true,
    name: "About Page",
    component: AboutUs_Page,
  },
  {
    path: "/contact",
    exact: true,
    name: "Contact Us",
    component: ContactPage,
  },
  {
    path: "/packaging-design-services",
    exact: true,
    name: "Packaging",
    component: Packaging,
  },
  {
    path: "/logo-design-services",
    exact: true,
    name: "Logo design",
    component: LogoDesign,
  },
  {
    path: "/mobile-application-design",
    exact: true,
    name: "mobile application design",
    component: MobilePage,
  },
  {
    path: "/web-application-design",
    exact: true,
    name: "web application design",
    component: HomePage,
  },
];

export default routes;
