import { Avatar, Badge } from 'antd'; // same components available in Ant Design

import {
  PhoneOutlined, // alternative to PermContactCalendarIcon
  SmileOutlined, // alternative to EmojiEmotionsIcon
} from '@ant-design/icons';

import './CustomAvatar.css';

const CustomAvatar = ({ title, subtitle, src, phone, icon }) => {
  return (
    <div className="avatar">
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        badgeContent={
          <div
            style={{
              padding: '0.3rem',
              backgroundColor: 'var(--primary)',
              borderRadius: '50%',
              width: 'max-content',
              height: 'max-content',
              position: 'relative',
              zIndex: 10,
            }}
          >
            <Badge count={5}>
              <Avatar icon={<SmileOutlined />} />
            </Badge>
          </div>
        }
      >
        <Avatar
          className="avatar-img"
          src={src}
          style={{
            width: 170,
            height: 170,
            border: '2px solid #fff',
            zIndex: 1,
          }}
        />
      </Badge>
      <div className="back"></div>
      <div className="title">{title.toLowerCase()}</div>
      {subtitle && <div className="subtitle">{subtitle}</div>}
      {phone && (
        <div className="phone">
          <PhoneOutlined style={{ fontSize: 16, color: "#1890ff" }} />{' '}
          {phone}
        </div>
      )}
    </div>
  );
};

export default CustomAvatar;
