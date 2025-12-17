import { Button, ConfigProvider, Input, Table } from 'antd';
import { useState } from 'react';
import HeaderTitle from '../../../components/shared/HeaderTitle';
import { CiCircleInfo } from 'react-icons/ci';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { PlusOutlined } from '@ant-design/icons';
import { User } from '../../../types/types';
import UserModal from '../users/UserModal';
import BlockModal from '../users/BlockModal';

const userData: User[] = [
    { key: '1', serialId: 'S-001', userName: 'John Doe', email: 'john.doe@example.com', role: 'Engineer' },
    { key: '2', serialId: 'S-002', userName: 'Jane Smith', email: 'jane.smith@example.com', role: 'Technician' },
    { key: '3', serialId: 'S-003', userName: 'Michael Brown', email: 'michael.brown@example.com', role: 'Accounted' },
    { key: '4', serialId: 'S-004', userName: 'Emily Davis', email: 'emily.davis@example.com', role: 'Engineer' },
    { key: '5', serialId: 'S-005', userName: 'Chris Wilson', email: 'chris.wilson@example.com', role: 'Technician' },
    { key: '6', serialId: 'S-006', userName: 'Sarah Johnson', email: 'sarah.johnson@example.com', role: 'Accounted' },
    { key: '7', serialId: 'S-007', userName: 'David Miller', email: 'david.miller@example.com', role: 'Engineer' },
    { key: '8', serialId: 'S-008', userName: 'Olivia Taylor', email: 'olivia.taylor@example.com', role: 'Technician' },
    {
        key: '9',
        serialId: 'S-009',
        userName: 'Daniel Anderson',
        email: 'daniel.anderson@example.com',
        role: 'Accounted',
    },
    { key: '10', serialId: 'S-010', userName: 'Sophia Thomas', email: 'sophia.thomas@example.com', role: 'Engineer' },
    { key: '11', serialId: 'S-011', userName: 'James Moore', email: 'james.moore@example.com', role: 'Technician' },
    {
        key: '12',
        serialId: 'S-012',
        userName: 'Isabella Martin',
        email: 'isabella.martin@example.com',
        role: 'Accounted',
    },
    { key: '13', serialId: 'S-013', userName: 'William Lee', email: 'william.lee@example.com', role: 'Engineer' },
    { key: '14', serialId: 'S-014', userName: 'Mia Harris', email: 'mia.harris@example.com', role: 'Technician' },
    {
        key: '15',
        serialId: 'S-015',
        userName: 'Benjamin Clark',
        email: 'benjamin.clark@example.com',
        role: 'Accounted',
    },
    {
        key: '16',
        serialId: 'S-016',
        userName: 'Charlotte Lewis',
        email: 'charlotte.lewis@example.com',
        role: 'Engineer',
    },
];

export default function Organizers({ dashboard }: { dashboard?: boolean }) {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isBlockModalVisible, setIsBlockModalVisible] = useState<boolean>(false);
    const [userToBlock, setUserToBlock] = useState<User | null>(null);
    const [openAddModal, setOpenAddModal] = useState<boolean>(false);
    console.log(openAddModal);

    const showUserDetails = (user: User) => {
        setSelectedUser(user);
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
        setSelectedUser(null);
    };

    const showBlockModal = (user: User) => {
        setUserToBlock(user);
        setIsBlockModalVisible(true);
    };

    const handleBlockConfirm = () => {
        // Handle block user logic here
        console.log('Blocking user:', userToBlock);
        setIsBlockModalVisible(false);
        setUserToBlock(null);
    };

    const handleBlockCancel = () => {
        setIsBlockModalVisible(false);
        setUserToBlock(null);
    };

    const columns = [
        {
            title: 'Serial ID',
            dataIndex: 'serialId',
            key: 'serialId',
            responsive: ['sm'] as any,
        },
        {
            title: 'Name',
            dataIndex: 'userName',
            key: 'userName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            responsive: ['md'] as any,
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
            responsive: ['lg'] as any,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: User) => (
                <div className="flex gap-2">
                    <Button
                        type="text"
                        icon={<CiCircleInfo size={24} />}
                        className="text-gray-500 hover:text-primary"
                        onClick={() => showUserDetails(record)}
                    />

                    <Button
                        type="text"
                        icon={<MdOutlineDeleteOutline size={24} />}
                        className={'text-red-400 hover:!text-red-500'}
                        onClick={() => showBlockModal(record)}
                    />
                </div>
            ),
        },
    ];

    return (
        <>
            <div className="rounded-lg shadow-sm border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-4">
                    <HeaderTitle title="Manage Admin" />
                    <div className="flex items-center gap-4">
                        <Input
                            placeholder="Search"
                            className=""
                            style={{ width: 280, height: 40 }}
                            prefix={<i className="bi bi-search"></i>}
                        />
                        <button
                            className="bg-primary h-10 px-4 rounded-md text-white text-sm space-x-1"
                            onClick={() => setOpenAddModal(true)}
                        >
                            <PlusOutlined /> Add Admin
                        </button>
                    </div>
                </div>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#C9961B',
                        },
                        components: {
                            Table: {
                                headerBg: '#FAF5E8',
                                headerColor: '#C9961B',
                            },
                        },
                    }}
                >
                    <Table
                        columns={columns}
                        dataSource={userData}
                        pagination={dashboard ? false : { pageSize: 9, total: userData.length }}
                        className="custom-table"
                    />
                </ConfigProvider>
            </div>

            <UserModal
                isModalVisible={isModalVisible}
                handleModalClose={handleModalClose}
                selectedUser={selectedUser}
            />

            <BlockModal
                isBlockModalVisible={isBlockModalVisible}
                handleBlockCancel={handleBlockCancel}
                handleBlockConfirm={handleBlockConfirm}
                isUserBlocked={userToBlock?.status !== 'Active'}
            />
        </>
    );
}
