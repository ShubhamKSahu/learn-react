import { Layout, Table, Button, Tag, Typography, Space, Card } from "antd";

const { Content } = Layout;
const { Title } = Typography;

const dataSource = [
  {
    key: "1",
    name: "iPhone 15",
    category: "Electronics",
    price: "$999",
    stock: "In Stock",
  },
  {
    key: "2",
    name: "Nike Air Max",
    category: "Footwear",
    price: "$199",
    stock: "Out of Stock",
  },
  {
    key: "3",
    name: "MacBook Pro",
    category: "Electronics",
    price: "$1999",
    stock: "In Stock",
  },
];

const columns = [
  {
    title: "Product Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Stock",
    dataIndex: "stock",
    key: "stock",
    render: (text) =>
      text === "In Stock" ? (
        <Tag color="green">{text}</Tag>
      ) : (
        <Tag color="red">{text}</Tag>
      ),
  },
  {
    title: "Actions",
    key: "actions",
    render: () => (
      <Space>
        <Button type="link">Edit</Button>
        <Button type="link" danger>
          Delete
        </Button>
      </Space>
    ),
  },
];

function ProductPage() {
  return (
    <Layout style={{ padding: "16px" }}>
      <Content>
        <Card>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Title level={3}>Products</Title>
            <Button type="primary">+ Add Product</Button>
          </div>

          <Table
            style={{ marginTop: 16 }}
            dataSource={dataSource}
            columns={columns}
            pagination={{ pageSize: 5 }}
          />
        </Card>
      </Content>
    </Layout>
  );
}

export default ProductPage;
