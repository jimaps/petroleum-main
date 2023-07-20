import { faDocker } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CookieIcon from "@mui/icons-material/Cookie";
import ScheduleIcon from "@mui/icons-material/Schedule";

function DockerIcon() {
  return <FontAwesomeIcon icon={faDocker} />;
}

export default function MenuData() {
  return [
    {
      name: "单井动态分析",
      icon: CookieIcon,
      to: "/petroleum/index",
    },
    {
      name: "开发页面",
      icon: CookieIcon,
      to: "/petroleum/dev",
    },
  ];
}
