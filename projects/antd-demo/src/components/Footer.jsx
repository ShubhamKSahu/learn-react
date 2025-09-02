import { Footer } from "antd/es/layout/layout"
function FooterPage(){
    return <Footer style={{ textAlign: 'center', width: '100vw' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
}
export default FooterPage;