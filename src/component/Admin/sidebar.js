import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaTachometerAlt, FaGem, FaReact, FaStickyNote } from "react-icons/fa";
import sidebarBg from "../../assets/background/bg2.png";
import "./admin.scss";
import { Link } from "react-router-dom";

const SideBar = ({ collapsed, toggled, handleToggleSidebar }) => {
  return (
    <>
      <ProSidebar
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <FaReact size={"3em"} color="#0ff" />
            <span className="fs-6 ms-2">PRACTICE</span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <Link to={'/admin'}>
              <MenuItem icon={<FaTachometerAlt />}>Dashboard</MenuItem>
            </Link>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu title={"Features"} icon={<FaGem />}>
              <Link to={'/admin/manager-user'}>
                <MenuItem>Quản Lý User</MenuItem>
              </Link>
              <MenuItem>Quản Lý Bài Quiz</MenuItem>
              <MenuItem>Quản Lý Câu Hỏi</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <a
              href="https://github.com/NguyenBao02/my-exam"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaStickyNote />
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                PRACTICE
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
};

export default SideBar;
