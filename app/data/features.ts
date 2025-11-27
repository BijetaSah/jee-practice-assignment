import { FaUnlock, FaCheckCircle, FaBookOpen } from "react-icons/fa";

interface Features {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
export const features: Features[] = [
  {
    id: 1,
    title: "JEE-Level MCQs",
    description:
      "Practice curated questions from Physics, Chemistry, and Math.",
    icon: FaBookOpen,
  },
  {
    id: 2,
    title: "No Login Required",
    description: "Start practicing instantly without creating an account.",
    icon: FaUnlock,
  },
  {
    id: 3,
    title: "Instant Answer Feedback",
    description: "Know immediately whether your selected answer is correct.",
    icon: FaCheckCircle,
  },
];
