import axios, { AxiosResponse } from 'axios';

export interface Properties {
  data: {
    properties: Property[]
  }
}

interface Property {
  address: string;
  addressName: string;
  dipid: string;
}

const getProperties = async (numberOfProperties: number): Promise<AxiosResponse<Properties>> => {
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
    console.log(response.status);
    const properties = response.data as Properties;
    console.log(properties.data.properties);
  });
