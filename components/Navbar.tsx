import { MessageOutlined } from "@ant-design/icons";
import { Menu, Spin } from "antd";
import { useSession } from "next-auth/react"
import Link from "next/link";

const Navbar: React.FC = () => {
    const { data: session, status } = useSession();
    const loading = status === 'loading';

    if (loading) {
        return <Spin></Spin>
    }
    return (
        <Menu mode="horizontal">
            <Menu.Item key='mail' icon={<MessageOutlined />}>
                <Link passHref href={'/'}>
                    Posts
                </Link>
            </Menu.Item>
        </Menu>
    )
}

export default Navbar;