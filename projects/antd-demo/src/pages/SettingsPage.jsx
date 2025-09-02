import { Card, Switch, Form, Input, Button } from "antd";

function SettingsPage() {
  return (
    <div style={{ display: "grid", gap: "24px" }}>
      <Card title="Profile Settings" bordered={false}>
        <Form layout="vertical" style={{ maxWidth: 400 }}>
          <Form.Item label="Name">
            <Input placeholder="Enter your name" />
          </Form.Item>
          <Form.Item label="Email">
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Button type="primary">Save Changes</Button>
        </Form>
      </Card>

      <Card title="Preferences" bordered={false}>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div>
            <span style={{ marginRight: 12 }}>Dark Mode</span>
            <Switch />
          </div>
          <div>
            <span style={{ marginRight: 12 }}>Email Notifications</span>
            <Switch defaultChecked />
          </div>
          <div>
            <span style={{ marginRight: 12 }}>Enable 2FA</span>
            <Switch />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default SettingsPage;
