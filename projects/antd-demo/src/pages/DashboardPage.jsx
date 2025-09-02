import { Layout, Typography } from "antd";
import Sidebar from "../components/Sidebar";
import { FloatButton } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title, Link } = Typography;

function DashboardPage() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* <Sidebar /> */}

      <Layout>
        <Header style={{ background: "#fff", padding: "0 16px" }}>
          <Title level={3} style={{ margin: 0 }}>
            Dashboard
          </Title>
        </Header>

        <Content style={{ margin: "16px" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: "#fff",
              borderRadius: 8,
              height: '430px'
            }}
          >
            <h2>Welcome to the Dashboard</h2>
            <p>Here you can show analytics, stats, or other components.</p>
            <Link href="https://ant.design" target="_blank" style={{fontSize: '1rem'}}>
              Visit Ant Design
            </Link>
            <FloatButton description="HELP INFO" shape="square" style={{ margin: "0 1rem 4rem 0" }}
 />
          </div>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Ant Design Demo ©2025 Created by You
        </Footer>
      </Layout>
    </Layout>
  );
}

export default DashboardPage;
