import axios, { AxiosResponse } from 'axios';
import { AxiosProperties, Properties } from './interface/property';

const getProperties = async (numberOfProperties: number): Promise<AxiosResponse<AxiosProperties>> => {
  return await axios({
    url: 'https://testharness.valocity-test.com.au/graphql',
    method: 'post',
    data: {
      query: `
        query {
          properties(limit:${numberOfProperties}) {
            address,
            addressName,
            dipid,
          }
        }`
    }
  })
};

getProperties(5)
  .then(response => {
    const properties: Properties = response.data.data;
    console.log(properties.properties);
  });
