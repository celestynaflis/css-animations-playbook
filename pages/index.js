import Image from 'next/image';
import Layout from '../components/Layout';
import Hello from '../components/Hello';

export default function Home() {
    return (
        <>
            <Layout title="CSS animations examples" />
            <Hello />
        </>
    );
}
