export const processSection = {
  heading: "How a Letano Tech project works, from first call to launch",
  intro:
    "Every Letano Tech project follows four steps: a discovery call, a written scope and price, a build with weekly demos, and a launch followed by ongoing support. You approve the scope before any work begins.", // [CONFIRM] weekly demos
  image: "/images/process.png",
  imageAlt: "A planning wall with sticky notes and a four-stage flow diagram",
};

export const processSteps: {
  id: string;
  title: string;
  summary: string;
  youDo: string;
  youGet: string;
}[] = [
  {
    id: "talk",
    title: "Talk",
    summary:
      "We start with a 30-minute call about what you need, who it is for and what it has to do. You leave with a clear next step, whether or not you hire us.",
    youDo: "Tell us the problem, your audience and your deadline.",
    youGet: "A short written summary of your goals and a recommended approach.",
  },
  {
    id: "scope",
    title: "Scope",
    summary:
      "We write down what will be built, what it costs and when it will be done. Nothing starts until you approve it.",
    youDo: "Review the scope and price, and ask for changes.",
    youGet: "A written scope, a fixed price and a timeline.",
  },
  {
    id: "build",
    title: "Build",
    summary:
      "We build in short cycles and show you working software every week, so you can change direction while it is cheap to do so.", // [CONFIRM]
    youDo: "Try each demo and give feedback.",
    youGet: "A working demo every week and a live test version.",
  },
  {
    id: "launch",
    title: "Launch and care",
    summary:
      "We launch the product, hand over the code and accounts, and stay on for updates, SEO and IT support if you want them.",
    youDo: "Approve the launch and choose whether to add a care plan.",
    youGet: "A live product, a full handover and optional monthly support.",
  },
];
