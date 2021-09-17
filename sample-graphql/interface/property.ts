export interface Properties {
  properties: Property[];
}
export interface AxiosProperties {
  data: Properties;
}

export interface Property {
  address: string;
  addressName: string;
  dipid: string;
}
