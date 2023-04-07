import ormconfig from '@app/ormconfig';

const ormseedConfig = {
  ...ormconfig,
  migrations: ['src/seeds/*.ts'],
};

export default ormseedConfig;
