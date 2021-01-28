import { Shot, useDribble } from '../../../infrastucture';
import { useQuery } from 'react-query';

type Props = {};

function DribbleShots(props: Props) {
  const { callApi } = useDribble();

  const { isLoading, isSuccess, isError, data } = useQuery<Shot[]>(
    'dribble_shots',
    async () => {
      if (callApi) {
        const response = await callApi('/user/shots');
        return response.data as Shot[];
      }
      return Promise.resolve([]);
    },
    {
      refetchOnWindowFocus: false,
      retry: false,
    },
  );

  const handleUpdate = (id: number) => {
    callApi.put(`/shots/${id}`, {
      title: 'Mors 2',
      description:
        'Quick, messy, five minute sketch of something that might become a fictional something.',
      tags: ['fiction', 'sasquatch', 'sketch', 'wip'],
    });
    // useMutation('dirbble_shot_update', () => {});
  };

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (isError) {
    return <p>error</p>;
  }

  if (isSuccess && data) {
    return (
      <div>
        {data.length === 0 && <p>No shots for you</p>}
        {data.length > 0 && (
          <ul>
            {data.map((shot) => (
              <li>
                <span>{shot.title}</span>
                <img src={shot.images.teaser} alt={`${shot.description}`} />
                <button onClick={() => handleUpdate(shot.id)}>update</button>
                {shot.tags.length > 0 && (
                  <ul style={{ display: 'flex', listStyle: ' none' }}>
                    {shot.tags.map((tag) => (
                      <li>{tag}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  return null;
}

export { DribbleShots };
