import React from 'react';
import { Card, Avatar, Button, Input, Typography } from 'antd';
import { EditOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const { Text } = Typography;

const AdminProfile: React.FC = () => {
    return (
        <Card
            style={{
                maxWidth: 900,
                margin: '0 auto',
                borderRadius: 12,
                border: 'none',
                backgroundColor: 'transparent',
                marginTop: 32,
            }}
            bodyStyle={{ padding: 24 }}
        >
            {/* Header */}
            <div
                style={{
                    position: 'relative',
                    marginBottom: 24,
                    paddingTop: 40,
                    paddingBottom: 40,
                    backgroundColor: '#FBFBFB',
                    borderRadius: 12,
                }}
            >
                {/* Edit button */}
                <Button
                    icon={<EditOutlined />}
                    style={{
                        position: 'absolute',
                        right: 12,
                        top: 12,
                        color: '#2E7D32',
                        backgroundColor: '#099F2A26',
                        border: 'none',
                        borderRadius: 6,
                        fontSize: 13,
                        height: 32,
                    }}
                >
                    Edit profile
                </Button>

                {/* Avatar + name */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: '#FBFBFB',
                        gap: 8,
                    }}
                >
                    <Avatar size={64} src="https://i.pravatar.cc/150?img=12" />
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: 600,
                            color: '#1F1F1F',
                        }}
                    >
                        Admin Humphrey
                    </Text>
                </div>
            </div>

            {/* Fields */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {/* Full Name */}
                <div>
                    <Text style={{ fontSize: 13, color: '#6B7280' }}>Full Name</Text>
                    <Input
                        value="Admin Humphrey"
                        readOnly
                        style={{
                            marginTop: 6,
                            height: 52,
                            backgroundColor: '#FBFBFB',
                            borderRadius: 12,
                            border: 'none',
                        }}
                    />
                </div>

                {/* Contact Number */}
                <div>
                    <Text style={{ fontSize: 13, color: '#6B7280' }}>Contact Number</Text>
                    <Input
                        value="+99-01846875456"
                        readOnly
                        style={{
                            marginTop: 6,
                            height: 52,
                            backgroundColor: '#FBFBFB',
                            borderRadius: 12,
                            border: 'none',
                        }}
                    />
                </div>

                {/* Password */}
                <div>
                    <Text style={{ fontSize: 13, color: '#6B7280' }}>Password</Text>
                    <Input.Password
                        value="********"
                        readOnly
                        iconRender={() => <EyeInvisibleOutlined />}
                        style={{
                            marginTop: 6,
                            height: 52,
                            backgroundColor: '#FBFBFB',
                            borderRadius: 12,
                            border: 'none',
                        }}
                    />
                </div>
            </div>
        </Card>
    );
};

export default AdminProfile;
