const aboutData = {
  title: "About Me",
  subtitle: "Full-Stack Web Developer focused on practical, real-world web products.",
  image: "/assets/profile.jpg",

  biodata: [
    { label: "Name", value: "Vy Van Muoi", icon: "bx bx-id-card" },
    {
      label: "Date of Birth",
      value: "February 24, 2004",
      icon: "bx bx-calendar",
    },
    { label: "Place of Birth", value: "DakLak, Vietnam", icon: "bx bx-map" },
    {
      label: "Email",
      value: "domuoigghh@gmail.com",
      icon: "bx bx-envelope",
    },
    { label: "Phone", value: "+84 868166353", icon: "bx bx-phone" },
    {
      label: "Education",
      value: "Saigon University",
      icon: "bx bx-book",
    },
    {
      label: "Major",
      value: "Software Engineering",
      icon: "bx bx-code-curly",
    },
  ],

  resume: {
    label: "Download My Resume",
    href: "/RenderCV_EngineeringResumes_Theme.pdf",
    icon: "bx bx-download",
    type: "secondary",
  },

  aboutNarrative: {
    whoAmI: {
      text: `I'm a Software Engineering student and full-stack web developer with hands-on experience building freelance web solutions, service booking platforms, IoT dashboards, and AI-powered CV screening applications.`,
      icon: "bx-info-circle",
    },
    approach: {
      text: `I build responsive interfaces and RESTful backends with React.js, Next.js, Spring Boot, Node.js, and MySQL, focusing on clean user flows, authentication, database design, and real-world product delivery.`,
      icon: "bx-bulb",
    },
  },
};

export default aboutData;
