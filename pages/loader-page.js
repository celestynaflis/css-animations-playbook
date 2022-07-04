import Image from 'next/image';
import Layout from '../components/Layout';
import Loader from '../components/Loader';

export default function LoaderPage() {
    return (
        <>
            <Layout title="Simple Linear Loader" />
            <Loader />
        </>
    );
}
