import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth/next';
import useCurrentUser from '../hooks/useCurrentUser';
import { authOptions } from './api/auth/[...nextauth]';
import Navbar from '@/components/Navbar';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
    <Navbar />
    </>
  );
}