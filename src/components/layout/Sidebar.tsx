
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { SidebarGenerator } from '../../utils/sidebarGenerator';
import { adminPaths } from '../../routes/admin.routes';
import { studentPaths } from '../../routes/student.routes';
import { createElement } from 'react';

const UserRole={
    STUDENT:'student',
    ADMIN:"admin",
    FACULTY:'faculty'
}
const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
    (icon, index) => ({
      key: String(index + 1),
      icon: createElement(icon),
      label: `nav ${index + 1}`,
    }),
  );


const Sidebar = () => {
 let role='admin';
 let sidebarItems;

 switch (role) {
    case UserRole.ADMIN:
        sidebarItems=SidebarGenerator(adminPaths,UserRole.ADMIN)
        
        break;
   
    case UserRole.STUDENT:
        sidebarItems=SidebarGenerator(studentPaths,UserRole.STUDENT)
        
        break;
 
    default:
        break;
 }

    return (
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
      </Sider>
    );
};

export default Sidebar;