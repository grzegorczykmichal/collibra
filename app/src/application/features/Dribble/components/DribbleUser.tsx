import { User, useDribble } from '../../../../infrastucture';
import { useQuery } from 'react-query';

type Props = {};

function DribbleUser(props: Props) {
  const { callApi } = useDribble();

  const { isLoading, isSuccess, isError, data } = useQuery<User | null>(
    'dribble_user',
    async () => {
      if (callApi) {
        const response = await callApi('/user');
        return response.data as User;
      }
      return Promise.resolve(null);
    },
    {
      refetchOnWindowFocus: false,
      retry: false,
    },
  );

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (isError) {
    return <p>error</p>;
  }

  if (isSuccess && data) {
    return (
      <div>
        <p>{data.name}</p>
        <img src={data.avatar_url} alt={`${data.name} avatar`} />
      </div>
    );
  }
  return null;
}

export { DribbleUser };
