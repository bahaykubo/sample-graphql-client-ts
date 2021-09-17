import { request, gql } from 'graphql-request';
import { Properties } from './interface/property';

const getProperties = async (numberOfProperties: number): Promise<Properties> => {
  const query = gql`
    {
      properties(limit:${numberOfProperties}) {
        address,
        addressName,
        dipid,
      }
    }
  `;

  return await request(
    'https://testharness.valocity-test.com.au/graphql',
    query
  )
};

getProperties(5)
  .then(response => {
    const properties: Properties = response;
    console.log(properties.properties);
  });
