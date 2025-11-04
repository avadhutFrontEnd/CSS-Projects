export interface Task {
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  tag?: string;
  members?: string[];
  extraMembers?: number;
  comments?: number;
  attachments?: number;
  dueDate?: string;
  likes?: number;
  status?: string;
  cardClass: string;
  titleClass: string;
  descriptionClass?: string;
  imageContainerClass?: string;
  imageClass?: string;
  tagClass: string;
  membersContainerClass: string;
  footerClass: string;
  dueDateClass?: string;
  likesClass?: string;
  statusClass?: string;
}

export const TodoTasks: Task[] = [
  {
    title: "UX Adjustments",
    description: "It just needs to adapt the UI from what you did before.",
    tag: "Research",
    members: [
      "https://placehold.co/24x24/6B7280/6B7280",
      "https://placehold.co/24x24/6B7280/6B7280",
    ],
    comments: 3,
    cardClass: styles.div50,
    titleClass: styles.div51,
    descriptionClass: styles.div52,
    tagClass: styles.div53,
    membersContainerClass: styles.div54,
    footerClass: styles.div55,
  },
  {
    title: "Moodboards",
    image: "https://placehold.co/300x200/E5E7EB/E5E7EB",
    imageAlt: "Moodboard",
    tag: "UI Design",
    members: ["https://placehold.co/24x24/6B7280/6B7280"],
    comments: 2,
    attachments: 2,
    dueDate: "Nov 23",
    cardClass: styles.div56,
    titleClass: styles.div57,
    imageContainerClass: styles.div58,
    imageClass: styles.moodboardImg,
    tagClass: styles.div59,
    membersContainerClass: styles.div60,
    footerClass: styles.div61,
    dueDateClass: styles.div62,
  },
];

export const InWorkTasks: Task[] = [
  {
    title: "Slack Integration",
    description:
      "Add a field in the portal to let the user connect their Slack account.",
    tag: "Development",
    members: ["https://placehold.co/24x24/6B7280/6B7280"],
    comments: 8,
    attachments: 3,
    dueDate: "Tomorrow",
    cardClass: styles.div67,
    titleClass: styles.div68,
    descriptionClass: styles.div69,
    tagClass: styles.div70,
    membersContainerClass: styles.div71,
    footerClass: styles.div72,
    dueDateClass: styles.div73,
  },
  {
    title: "Copywriting of the app",
    description:
      "Composing words to provide people with decision-making clarity when interacting with a product",
    tag: "UX Writing",
    members: [
      "https://placehold.co/24x24/6B7280/6B7280",
      "https://placehold.co/24x24/6B7280/6B7280",
    ],
    comments: 8,
    dueDate: "Nov 30",
    cardClass: styles.div74,
    titleClass: styles.div75,
    descriptionClass: styles.div76,
    tagClass: styles.div77,
    membersContainerClass: styles.div78,
    footerClass: styles.div79,
    dueDateClass: styles.div80,
  },
  {
    title: "Implement Apps",
    tag: "Development",
    members: [
      "https://placehold.co/24x24/6B7280/6B7280",
      "https://placehold.co/24x24/6B7280/6B7280",
      "https://placehold.co/24x24/6B7280/6B7280",
    ],
    cardClass: styles.div81,
    titleClass: styles.div82,
    tagClass: styles.div83,
    membersContainerClass: styles.div84,
    footerClass: styles.div85,
  },
];

export const QATasks: Task[] = [
  {
    title: "Dashboard Design",
    image: "https://placehold.co/300x200/E5E7EB/E5E7EB",
    imageAlt: "Dashboard Preview",
    tag: "UI Design",
    members: [
      "https://placehold.co/24x24/6B7280/6B7280",
      "https://placehold.co/24x24/6B7280/6B7280",
    ],
    comments: 5,
    attachments: 1,
    likes: 2,
    cardClass: styles.div90,
    titleClass: styles.div91,
    imageContainerClass: styles.div92,
    imageClass: styles.previewImg,
    tagClass: styles.div93,
    membersContainerClass: styles.div94,
    footerClass: styles.div95,
    likesClass: styles.div96,
  },
  {
    title: "Design System",
    description: "Create a consistent look and feel both on web and mobile.",
    tag: "UI Design",
    members: [
      "https://placehold.co/24x24/6B7280/6B7280",
      "https://placehold.co/24x24/6B7280/6B7280",
    ],
    extraMembers: 3,
    comments: 10,
    attachments: 2,
    likes: 10,
    cardClass: styles.div97,
    titleClass: styles.div98,
    descriptionClass: styles.div99,
    tagClass: styles.div100,
    membersContainerClass: styles.div101,
    footerClass: styles.div102,
    likesClass: styles.div103,
  },
];

export const CompletedTasks: Task[] = [
  {
    title: "Presentation",
    description:
      "Help businesses to clearly define their annual e-commerce digital strategy by creating a high-level plan.",
    tag: "Planning",
    members: ["https://placehold.co/24x24/6B7280/6B7280"],
    comments: 11,
    attachments: 3,
    status: "Done",
    cardClass: styles.div108,
    titleClass: styles.div109,
    descriptionClass: styles.div110,
    tagClass: styles.div111,
    membersContainerClass: styles.div112,
    footerClass: styles.div113,
    statusClass: styles.div114,
  },
  {
    title: "Brainstorming",
    tag: "Research",
    members: [
      "https://placehold.co/24x24/6B7280/6B7280",
      "https://placehold.co/24x24/6B7280/6B7280",
      "https://placehold.co/24x24/6B7280/6B7280",
    ],
    comments: 21,
    status: "Done",
    cardClass: styles.div115,
    titleClass: styles.div116,
    tagClass: styles.div117,
    membersContainerClass: styles.div118,
    footerClass: styles.div119,
    statusClass: styles.div120,
  },
];

import styles from "./InputDesign.module.css";
