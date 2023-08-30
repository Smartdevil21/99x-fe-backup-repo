import {
  RiBehanceFill,
  RiDribbbleFill,
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiBehanceLine,
} from "react-icons/ri";

const x = [
  {
    title: "Services",
    link: {
      title: "About",
      href: "/services",
    },
  },
  {
    title: "Process",
    link: {
      title: "Contact",
      href: "/process",
    },
  },
  {
    title: "Our Work",
    link: {
      title: "Careers",
      href: "/our-work",
    },
  },
  {
    title: "Contact",
    link: {
      title: "Terms of Services",
      href: "/contact",
    },
  },
  {
    title: "About",
    link: {
      title: "Privacy Policy",
      href: "/about",
    },
  },
  {
    title: "Terms of Service",
    link: {
      title: "Services",
      href: "/p/terms",
    },
    bigText: true,
  },
  {
    title: "Privacy Policy",
    link: {
      title: "Projects",
      href: "/p/privacy-policy",
    },
  },
  {
    title: "Web Application",
    link: {
      title: "Web Application",
      href: "/web-application-design",
    },
  },
  {
    title: "Mobile Application",
    link: {
      title: "Mobile Application",
      href: "/mobile-application-design",
    },
  },
  {
    title: "Packaging Design",
    link: {
      title: "Packaging Design",
      href: "/packaging-design-services",
    },
  },
  {
    title: "Logo Design.",
    link: {
      title: "Logo Design.",
      href: "/ogo-design-services",
    },
  },
  // {
  //   title: "Process",
  //   link: {
  //     title: "Process",
  //     href: "https://google.com",
  //   },
  // },
];

const social = [
  {
    icon: <RiLinkedinFill />,
    link: "https://www.linkedin.com/company/99xstartup/",
  },
  {
    icon: <RiTwitterFill />,
    link: "https://twitter.com/99xStartup",
  },
  {
    icon: <RiFacebookCircleFill />,
    link: "https://www.facebook.com/99xstartup",
  },
  {
    icon: <RiInstagramFill />,
    link: "https://www.instagram.com/99xstartup",
  },

  {
    // icon: <RiBehanceFill />,
    link: "https://www.behance.net/99xstartup",
  },
  {
    icon: <RiDribbbleFill />,
    link: "https://dribbble.com/99xStartup/about",
  },
];

// const x = [
//     {
//         title: "Support",
//         links: [
//             {
//                 title: 'Support',
//                 href: 'https://99x.freshdesk.com'
//             },
//         ]
//     },
//     {
//         title: "Company",
//         links: [
//             {
//                 title: 'About',
//                 link: '/about'
//             },
//             {
//                 title: 'Enterprises',
//                 link: '/enterprise-plan'
//             },
//             {
//                 title: 'Terms of Service',
//                 link: '/p/terms'
//             },
//             {
//                 title: 'Privacy Policy',
//                 link: '/p/privacy-policy'
//             },
//             {
//                 title: 'Refund Policy',
//                 link: '/'
//             },
//         ]
//     },
//     {
//         title: "Product",
//         links: [
//             {
//                 title: 'How it works?',
//                 link: '/how-it-works'
//             },
//             {
//                 title: 'Schedule Consult',
//                 link: '/contact'
//             },
//             {
//                 title: 'Signup',
//                 link: '/'
//             },
//             {
//                 title: 'Login',
//                 link: '/'
//             },
//         ]
//     },

//     {
//         title: "Subscription",
//         links: [
//             {
//                 title: "Graphic Design",
//                 link: "/c/graphic-design"
//             },
//             {
//                 title: "UI/UX Design",
//                 link: "/c/ui-ux"
//             },
//         ]
//     },
// {
//     title: "On-Demand",
//     links: [
//         {
//             title: "Link Building",
//             link: "/on-demand/link-building"
//         },
//         {
//             title: "Articles & Blogs",
//             link: "/on-demand/articles-and-blogs"
//         },
//         {
//             title:"URL Structure & Meta Data",
//             link:'/on-demand/url-structure-and-meta-data'
//         }
//     ]
// },

// ]

export default { links: x, social };
