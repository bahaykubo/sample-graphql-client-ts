import { request, gql } from 'graphql-request';

const getLaunches = async (): Promise<any> => {
  const query = gql`
    query Launches {
      launches {
        mission_name
        mission_id
        rocket {
          rocket_name
          rocket {
            company
            name
            mass {
              kg
            }
          }
        }
        launch_site {
          site_name
        }
        launch_date_local
      }
    }
  `;

  return await request(
    'https://api.spacex.land/graphql/',
    query
  );
};

getLaunches()
  .then(response => {
    console.log(response);
  });
