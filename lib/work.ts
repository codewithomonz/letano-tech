// Copy for the Work section. Edit text here, not inside the component.
//
// IMPORTANT: the three projects below are SAMPLES (placeholder: true).
// Replace them with your real projects, then set placeholder to false.
// Only write results you can prove. Leave out numbers you cannot back up.

export type Project = {
  id: string;
  title: string;
  type: string;
  image: string;
  imageAlt: string;
  summary: string;
  problem: string;
  stack: string[];
  result: string;
  placeholder?: boolean;
};

export const workSection = {
  heading: "Web, mobile and desktop projects built by Letano Tech",
  intro:
    "These projects show the web applications, mobile apps and desktop software Letano Tech builds. Each one lists the problem the client had, the technology used and the result, so you can judge whether we have solved something close to your situation.",
};

export const projects: Project[] = [
  {
    id: "web-project",
    title: "Order management web app",
    type: "Web application",
    image: "/images/work/project-web.png",
    imageAlt: "Order management web app dashboard shown on a laptop screen",
    summary:
      "A web application that lets a small business take, track and fulfil customer orders from one dashboard, on a phone or a computer.",
    problem: "[Describe the client's problem in one or two sentences.]",
    stack: ["[Add your stack]"],
    result:
      "[Add a measured result, for example orders processed or hours saved.]",
    placeholder: true,
  },
  {
    id: "mobile-project",
    title: "Customer booking mobile app",
    type: "Mobile app",
    image: "/images/work/project-mobile.png",
    imageAlt: "Customer booking mobile app shown on two smartphones",
    summary:
      "An iOS and Android app that lets customers book appointments and get reminders without calling the business.",
    problem: "[Describe the client's problem in one or two sentences.]",
    stack: ["[Add your stack]"],
    result:
      "[Add a measured result, for example bookings made or calls saved.]",
    placeholder: true,
  },
  {
    id: "desktop-project",
    title: "Point-of-sale desktop software",
    type: "Desktop software",
    image: "/images/work/project-desktop.png",
    imageAlt:
      "Point-of-sale desktop software running on a shop counter terminal",
    summary:
      "Desktop software for a shop counter that records sales, tracks stock and keeps working when the internet connection drops.",
    problem: "[Describe the client's problem in one or two sentences.]",
    stack: ["[Add your stack]"],
    result:
      "[Add a measured result, for example sales recorded or stock errors reduced.]",
    placeholder: true,
  },
];
