import {
  FileOutlined,
  UserOutlined,
  DashboardOutlined,
  SettingOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import { Menu, Layout } from "antd";
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
    { label: "Dashboard", key: "/dashboard", icon: <DashboardOutlined /> },
    { label: "Products", key: "/products", icon: <ProductOutlined /> },
    { label: "Users", key: "/users", icon: <UserOutlined /> },
    { label: "Settings", key: "/settings", icon: <SettingOutlined /> },
    { label: "Feedback", key: "/feedback", icon: <FileOutlined /> },
  ];

function Sidebar() {
    const navigate = useNavigate();
  return (
    <Sider width="240" style={{ minHeight: "100vh" }}>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
        onClick={(e) => navigate(e.key)}
      />
    </Sider>
  );
}

export default Sidebar;
