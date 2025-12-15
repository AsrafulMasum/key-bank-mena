import { ConfigProvider, Input, Table } from 'antd';
import { useState } from 'react';
import UserModal from './UserModal';
import BlockModal from './BlockModal';
import HeaderTitle from '../../../components/shared/HeaderTitle';
import { User } from '../../../types/types';
import { StatCard } from '../dashboard';
import { BsHouseLock } from 'react-icons/bs';
import { GiKeyring, GiMoneyStack } from 'react-icons/gi';
import { PiUsersThree } from 'react-icons/pi';

const userData: User[] = [
    {
        key: '1',
        serialId: 'USR-1001',
        userName: 'John Doe',
        email: 'john.doe@example.com',
        address: '123 Bay Street, Apt 204',
        city: 'Toronto',
        createdAt: '2025-10-12',
        country: 'Canada',
        status: 'active',
    },
    {
        key: '2',
        serialId: 'USR-1002',
        userName: 'Sarah Johnson',
        email: 'sarah.johnson@example.com',
        address: '45 Granville Ave',
        city: 'Vancouver',
        createdAt: '2025-09-21',
        country: 'Canada',
        status: 'inactive',
    },
    {
        key: '3',
        serialId: 'USR-1003',
        userName: 'Michael Brown',
        email: 'michael.brown@example.com',
        address: '78 Crescent Rd, Suite 10',
        city: 'Montreal',
        createdAt: '2025-08-30',
        country: 'Canada',
        status: 'active',
    },
    {
        key: '4',
        serialId: 'USR-1004',
        userName: 'Emily Davis',
        email: 'emily.davis@example.com',
        address: '210 9th Ave SE',
        city: 'Calgary',
        createdAt: '2025-07-14',
        country: 'Canada',
        status: 'inactive',
    },
    {
        key: '5',
        serialId: 'USR-1005',
        userName: 'Robert Wilson',
        email: 'robert.wilson@example.com',
        address: '14 Elgin St, Downtown',
        city: 'Ottawa',
        createdAt: '2025-06-03',
        country: 'Canada',
        status: 'active',
    },
    {
        key: '6',
        serialId: 'USR-1006',
        userName: 'Olivia Martin',
        email: 'olivia.martin@example.com',
        address: '520 Jasper Ave NW',
        city: 'Edmonton',
        createdAt: '2025-05-26',
        country: 'Canada',
        status: 'active',
    },
    {
        key: '7',
        serialId: 'USR-1007',
        userName: 'Daniel Thompson',
        email: 'daniel.thompson@example.com',
        address: '321 Broadway Ave',
        city: 'Winnipeg',
        createdAt: '2025-04-17',
        country: 'Canada',
        status: 'inactive',
    },
    {
        key: '8',
        serialId: 'USR-1008',
        userName: 'Sophia White',
        email: 'sophia.white@example.com',
        address: '55 Rue Saint-Jean',
        city: 'Quebec City',
        createdAt: '2025-03-08',
        country: 'Canada',
        status: 'active',
    },
    {
        key: '9',
        serialId: 'USR-1009',
        userName: 'James Anderson',
        email: 'james.anderson@example.com',
        address: '200 Barrington St',
        city: 'Halifax',
        createdAt: '2025-02-22',
        country: 'Canada',
        status: 'inactive',
    },
    {
        key: '10',
        serialId: 'USR-1010',
        userName: 'Ava Taylor',
        email: 'ava.taylor@example.com',
        address: '99 Main St W',
        city: 'Hamilton',
        createdAt: '2025-01-15',
        country: 'Canada',
        status: 'active',
    },
];

export default function Users({ dashboard }: { dashboard?: boolean }) {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isBlockModalVisible, setIsBlockModalVisible] = useState<boolean>(false);
    const [userToBlock, setUserToBlock] = useState<User | null>(null);

    // const showUserDetails = (user: User) => {
    //     setSelectedUser(user);
    //     setIsModalVisible(true);
    // };

    const handleModalClose = () => {
        setIsModalVisible(false);
        setSelectedUser(null);
    };

    // const showBlockModal = (user: User) => {
    //     setUserToBlock(user);
    //     setIsBlockModalVisible(true);
    // };

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
            title: 'Key Id',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'User Name',
            dataIndex: 'userName',
            key: 'userName',
        },
        {
            title: 'User Type',
            dataIndex: 'userType',
            key: 'userType',
            responsive: ['md'] as any,
        },
        {
            title: 'Locker',
            dataIndex: 'address',
            key: 'address',
            responsive: ['lg'] as any,
        },
        {
            title: 'Status',
            dataIndex: 'createdAt',
            key: 'createdAt',
            responsive: ['sm'] as any,
        },
        // {
        //     title: 'Action',
        //     key: 'action',
        //     render: (_: any, record: User) => (
        //         <div className="flex gap-2">
        //             <Button
        //                 type="text"
        //                 icon={<CiCircleInfo size={24} />}
        //                 className="text-gray-500 hover:text-primary"
        //                 onClick={() => showUserDetails(record)}
        //             />

        //             <Button
        //                 type="text"
        //                 icon={record?.status == 'active' ? <CiLock size={24} /> : <CiUnlock size={24} />}
        //                 className={
        //                     record?.status == 'active'
        //                         ? 'text-gray-500 hover:!text-red-500'
        //                         : 'hover:!text-gray-500 !text-red-500'
        //                 }
        //                 onClick={() => showBlockModal(record)}
        //             />
        //             <Button
        //                 type="text"
        //                 icon={<MdOutlineDeleteOutline size={24} />}
        //                 className={'text-red-400 hover:!text-red-500'}
        //                 onClick={() => showBlockModal(record)}
        //             />
        //         </div>
        //     ),
        // },
    ];

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-4">
                <StatCard icon={<BsHouseLock />} title="Total Lockers" value="68" />
                <StatCard icon={<GiKeyring />} title="Active Keys" value="169" />
                <StatCard icon={<PiUsersThree />} title="Total Users" value="3,802" />
                <StatCard icon={<GiMoneyStack />} title="Monthly Revenue" value="AED 45,085" />
            </div>
            <div className="rounded-lg shadow-sm border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-4">
                    <HeaderTitle title="Customers" />
                    <Input
                        placeholder="Search"
                        className=""
                        style={{ width: 280, height: 40 }}
                        prefix={<i className="bi bi-search"></i>}
                    />
                </div>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#C9961B',
                        },
                    }}
                >
                    <Table
                        columns={columns}
                        dataSource={userData}
                        pagination={dashboard ? false : { pageSize: 8, total: userData.length }}
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
                isUserBlocked={userToBlock?.status !== 'active'}
            />
        </>
    );
}
