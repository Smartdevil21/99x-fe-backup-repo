// https://99xassets.s3.ap-south-1.amazonaws.com/Cover+Videos/Case+Study/

const projectData = [
  {
    client: "Earthy Tales",
    category: "Website",
    description:
      "Earthy Tales offers the largest selection of organic produce in India that started with a handful of farmers with a mission to make farming more sustainable and bring fresh produce to customer's doorstep.",
    pdf: "Earthy+Tales-compressed.pdf",
    video:
      "https://99xassets.s3.ap-south-1.amazonaws.com/Cover+Videos/earthly_tales_compressed.mp4",
    tags: ["Web Design", "UI-UX", " Illustrations"],
    industry: "Ecommerce",
  },
  {
    client: "Inconn",
    category: "Web App",
    description: "AI-powered enterprise grade asset management platform.",
    pdf: "Inconn-compressed.pdf",
    video:
      "https://99xassets.s3.ap-south-1.amazonaws.com/Cover+Videos/inconn_compressed.mp4",
    tags: ["Logo & Branding", "UI-UX", "Design System"],
    industry: "SaaS, B2B",
  },
  {
    client: "Gaminar",
    category: "Web App",
    description:
      "A platform that enables facilitators to deliver experiential learning programs and team building activities using gamified webinars & simulations.",
    pdf: "Gaminar-compressed.pdf",
    video:
      "https://99xassets.s3.ap-south-1.amazonaws.com/Cover+Videos/Gaminar-compressed.mp4",
    tags: ["UI-UX", "Design System"],
    industry: "SaaS",
  },
  {
    client: "Huupe",
    category: "Website",
    description:
      "The world's first smart basketball hoop. Using state-of-the-art technology, the huupe tracks your shooting percentage, position on the court, speed, agility, release time, and more",
    pdf: "Huppe.pdf",
    video:
      "https://99xassets.s3.ap-south-1.amazonaws.com/Cover+Videos/Huupe-compressed.mp4",
    tags: ["Web Design", "Technology"],
    industry: "Sports",
  },
  {
    client: "Practo",
    category: "Website",
    description:
      "A leading health tech platform that offers online doctor consultations, appointments & end-to-end care from top surgeons in the country.",
    pdf: "Practo.pdf",
    video:
      "https://99xassets.s3.ap-south-1.amazonaws.com/Cover+Videos/practo-compressed.mp4",
    tags: ["Web Design", "Technology"],
    industry: "Health Tech",
  },
  {
    client: "Skillbook Academy",
    category: "Website",
    description:
      "An EdTech Platform focused in North American segment that enables users to pursue their career goals with online and in-person courses that focuses on Agile principles.",
    pdf: "Skillbook+-+Case+Study-compressed.pdf",
    video:
      "https://99xassets.s3.ap-south-1.amazonaws.com/Cover+Videos/skillbook-compressed.mp4",
    tags: ["Web Design", "Technology", "Animations and Interactions"],
    industry: "EdTech",
  },
  {
    client: "Vister",
    category: "Mobile App",
    description:
      "A platform that simplifies the process of disbursing personal loans in less than 60 seconds.",
    pdf: "Vister-compressed.pdf",
    video:
      "https://99xassets.s3.ap-south-1.amazonaws.com/Cover+Videos/Vister-compressed.mp4",
    tags: ["Logo & Branding", "UI-UX", "Animations and Interactions"],
    industry: "FinTech",
  },
  {
    client: "Moneyfactory",
    category: "Web App",
    description:
      "AI-powered investment platform that empowers first-time investors to seasoned experts to take control of their finances.",
    pdf: "Moneyfactory.pdf",
    video:
      "https://99xassets.s3.ap-south-1.amazonaws.com/Cover+Videos/Moneyfactory-compressed.mp4",
    tags: ["Logo & Branding", "UI-UX", "Web Design"],
    industry: "FinTech",
  },
  {
    client: "Peperstreet",
    category: "Mobile App",
    description:
      "A video based dating app that helps people avoid boring monotonous swipes with video first profiles.",
    pdf: "Peperstreet_compressed.pdf",
    video:
      "https://99xassets.s3.ap-south-1.amazonaws.com/Cover+Videos/pepperstreet-compressed.mp4",
    tags: ["Logo & Branding", "UI-UX", "Design System"],
    industry: "Lifestyle",
  },
  {
    client: "Vykhari",
    category: "Website",
    description:
      "Digital branding & web design for a renowned fashion stylist.",
    pdf: "Vykhari+-+Case+Study-compressed.pdf",
    video:
      "https://99xassets.s3.ap-south-1.amazonaws.com/Cover+Videos/vykhari-compressed.mp4",
    tags: ["Web Design", "Technology", "Animations and Interactions"],
    industry: "Website",
  },
  {
    client: "Chipsoft",
    category: "Web App",
    description:
      "A learning experience platform (LXP) that manages events, resources, & skill development all in one platform for modern enterprises & businesses.",
    pdf: "Chipsoft%2BCase%2BStudy-compressed.pdf",
    video:
      "https://99xassets.s3.ap-south-1.amazonaws.com/Cover+Videos/chipsoft-compressed.mp4",
    tags: ["UI-UX", "Design System"],
    industry: "SaaS. B2B",
  },
  {
    client: "Humble",
    category: "Web App",
    description:
      "A community driven platform designed for the entrepreneurs and creators to access content whether its products, blogs, podcasts, or videos.",
    pdf: "Humble-compressed.pdf",
    video:
      "https://99xassets.s3.ap-south-1.amazonaws.com/Cover+Videos/humble-compressed.mp4",
    tags: ["UI-UX", "Logo & Branding"],
    industry: "Social Media",
  },
  {
    client: "Prosprr",
    category: "Website",
    description:
      "A crypto investment platform that simplifies investing in crypto coins & portfolios with automated SIPs.",
    pdf: "Prosprr-compressed.pdf",
    video:
      "https://99xassets.s3.ap-south-1.amazonaws.com/Cover+Videos/prosper-compressed.mp4",
    tags: ["Web Design"],
    industry: "Fintech",
  },
  {
    client: "Digited Labs",
    category: "Website",
    description:
      "Digited builds next-generation e-learning platforms for students, educators and institutes, converging them into an ecosystem for learning.",
    pdf: "Digited+Labs-compressed-compressed.pdf",
    video:
      "https://99xassets.s3.ap-south-1.amazonaws.com/Cover+Videos/digital-labs-compressed.mp4",
    tags: ["Web Design"],
    industry: "EdTech",
  },
  {
    client: "OTO Capital",
    category: "Mobile App",
    description:
      "A two-wheeler digital commerce and finance platform used by lakhs of Indians every month to research bikes and scooters, select their dream two-wheeler .",
    pdf: "oto.pdf",
    video:
      "https://99xassets.s3.ap-south-1.amazonaws.com/Cover+Videos/oto-compressed.mp4",
    tags: ["Web Design", "UI-UX"],
    industry: "Fintech",
  },
  {
    client: "Kick Pick",
    category: "Mobile App",
    description:
      "MVP UI-UX design of an ecommerce app that allows users to get their hands on freshest & latest fashion with ease.",
    pdf: "Kickpick.pdf",
    video:
      "https://99xassets.s3.ap-south-1.amazonaws.com/Cover+Videos/kickpick_compressed.mp4",
    tags: ["UI-UX"],
    industry: "Ecommerce",
  },
  {
    client: "We've got issues",
    category: "Website",
    description:
      "We’ve got issues is an online news and magazine platform dwelving deep into design, art, work, style and culture.",
    pdf: "WGT.pdf",
    video:
      "https://99xassets.s3.ap-south-1.amazonaws.com/Cover+Videos/wgt_compressed.mp4",
    tags: ["Logo & Branding", "Web Design"],
    industry: "Media",
  },
  {
    client: "Fuse",
    category: "Mobile App",
    description:
      "MVP design of a finTech app that offers investing across asset classes such as stocks, mutual funds, commodities , gold & keep track of their performance in a simplest way possible",
    pdf: "fuse.pdf",
    video:
      "https://99xassets.s3.ap-south-1.amazonaws.com/Cover+Videos/fuse-compressed.mp4",
    tags: ["UI-UX"],
    industry: "Fintech",
  },
  {
    client: "Tekorero",
    category: "Website",
    description: "CRM & sales automation platform",
    pdf: "Tekorero.pdf",
    video:
      "https://99xassets.s3.ap-south-1.amazonaws.com/Cover+Videos/tekorero-compressed.mp4",
    tags: ["Web Design", "Technology"],
    industry: "B2B Website",
  },
  {
    client: "Gausmann",
    category: "Web App",
    description:
      "A marketplace for on-demand services in Germany that offers a host of services for home & personal care.",
    pdf: "Gausmann.pdf",
    video:
      "https://99xassets.s3.ap-south-1.amazonaws.com/Cover+Videos/gausmann-compressed.mp4",
    tags: ["UI-UX", "Design System"],
    industry: "Marketplace. B2C",
  },
  {
    client: "99x Startup",
    category: "Web App",
    description:
      "End to end creator marketplace design with dashboards for B2B service orders, project management, payment gateway, admin & vendor dashboards, Custom login & more.",
    pdf: "99xStartup-compressed.pdf",
    video:
      "https://99xassets.s3.ap-south-1.amazonaws.com/Cover+Videos/99x-startup-compressed.mp4",
    tags: ["Logo & Branding", "UI-UX"],
    industry: "Marketplace . B2B",
  },
  {
    client: "Alivio",
    category: "Website",
    description:
      "Fitness & personal care app that offers on-demand content from top notch fitness instructors.",
    pdf: "Alivio.pdf",
    video:
      "https://99xassets.s3.ap-south-1.amazonaws.com/Cover+Videos/alivio-compressed.mp4",
    tags: ["Web Design", "Logo & Branding"],
    industry: "Personal Care & fitness",
  },
  {
    client: "Furniko",
    category: "Website",
    description:
      "Furniko is an online e-commerce website that offers a wide variety of furniture, home decor, lamps & furnishings, Homeware and more at the best prices.",
    pdf: "Furnikp.pdf",
    video:
      "https://99xassets.s3.ap-south-1.amazonaws.com/Cover+Videos/furniko-compressed.mp4",
    tags: ["Web Design", "Logo & Branding"],
    industry: "EdTech",
  },
  {
    client: "Concelium",
    category: "Website",
    description:
      "Conselium is a financial and strategic advisory firm that offers wealth and financial management services to enterprises, businesses and high networth individuals.",
    pdf: "Concelium.pdf",
    video:
      "https://99xassets.s3.ap-south-1.amazonaws.com/Cover+Videos/conceliun-compressed.mp4",
    tags: ["UI-UX"],
    industry: "B2B Website",
  },
];

export default projectData;
