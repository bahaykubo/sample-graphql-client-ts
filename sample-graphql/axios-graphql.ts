import axios, { AxiosResponse } from 'axios';

const getLaunches = async (): Promise<AxiosResponse<any>> => {
  return await axios({
    url: 'https://api.spacex.land/graphql/',
    method: 'post',
    data: {
      query: `
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
        }`
    }
  });
};

getLaunches()
  .then(response => {
    console.log(response.data.data);
  });
