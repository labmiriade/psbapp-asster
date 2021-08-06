import { components } from './schema';
import * as faker from 'faker';

export function PlaceList(): components['schemas']['PlaceList'] {
  const places = [];

  for (let i = 0; i < 50; i++) {
    places.push(PlaceInfo());
  }

  return {
    places,
  };
}

export function PlaceInfo(placeId?: string): components['schemas']['PlaceInfo'] {
  return {
    placeId: placeId ?? faker.random.word(),
    city: faker.address.city(),
    streetName: faker.address.streetAddress(),
    streetNumber: faker.datatype.number().toString(),
    province: faker.address.county(),
    lat: faker.address.latitude(),
    lon: faker.address.longitude(),
    category: faker.random.word(),
    name: faker.company.companyName(),
    description: faker.random.words(20),
    emailAddress: faker.name.firstName() + '@gmail.com',
    website: `https://wwww.${faker.internet.domainName()}.com`,
    istatCode: `${faker.datatype.string(1)}${faker.datatype.number(999)}`,
    openingTimeDesc: 'dal lunedì al venerdì dalle 9 alle 18',
  };
}
