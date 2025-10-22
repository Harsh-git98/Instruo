import { useEffect, useState } from 'react';
import {
  Layout,
  Menu,
  Space,
  Avatar,
  Dropdown,
  ConfigProvider,
  theme,
  Button,
  Divider,
} from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {
  ToolOutlined,
  CalendarOutlined,
  DollarOutlined,
  TeamOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  HomeOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import DrawerSidebar from './SideBar';
// import ProfileDropdown from "./ProfileDropdown";
import './Navbar.css';
// import CustomButton from "../../components/CustomButton/CustomButton";

const { Header } = Layout;

const Navbar = ({ user, login, logout }) => {
  const width = window.innerWidth;
  const [selectedKey, setSelectedKey] = useState(['/']);
  const location = useLocation();

  useEffect(() => {
    // Map pathname to the top-level route key (e.g. /events/123 -> /events)
    const base = location.pathname.split('/')[1];
    const active = base ? `/${base}` : '/';
    setSelectedKey([active]);
  }, [location.pathname]);

  return (
    <>
      {width >= 820 ? (
        <Layout>
          <Header
            style={{
              position: 'fixed',
              zIndex: 100000,
              width: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.48)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Link to="/" onClick={() => setSelectedKey([])}>
              <div
                className="logo"
                style={{
                  float: 'left',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  marginRight: '1rem',
                }}
              >
                INSTRUO 14
              </div>
            </Link>
            <Menu
              selectedKeys={selectedKey}
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[]}
              style={{
                fontSize: '1rem',
                display: 'flex',
                justifyContent: 'right',
                backgroundColor: 'transparent',
              }}
              className="instruo-navmenu"
            >
              <Menu.Item
                key="/"
                icon={<HomeOutlined />}
                onClick={() => setSelectedKey(['/'])}
              >
                <Link to="/">Home</Link>
              </Menu.Item>

              <Menu.Item
                key="/events"
                icon={<CalendarOutlined />}
                onClick={() => setSelectedKey(['/events'])}
              >
                <Link to="/events">Events</Link>
              </Menu.Item>
              <Menu.Item
                key="/sponsors"
                icon={<DollarOutlined />}
                onClick={() => setSelectedKey(['/sponsors'])}
              >
                <Link to="/sponsors">Sponsors</Link>
              </Menu.Item>
              <Menu.Item
                key="/merchandise"
                icon={<ShoppingOutlined />}
                onClick={() => setSelectedKey(['/merchandise'])}
              >
                <Link to="/merchandise">Merchandise</Link>
              </Menu.Item>
              <Menu.Item
                key="/team"
                icon={<TeamOutlined />}
                onClick={() => setSelectedKey(['/team'])}
              >
                <Link to="/team">Our Team</Link>
              </Menu.Item>
            </Menu>
          </Header>
        </Layout>
      ) : (
        <DrawerSidebar />
      )}
    </>
  );
};

export default Navbar;
