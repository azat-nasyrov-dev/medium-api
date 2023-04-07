import { DataSource } from 'typeorm';
import ormseedConfig from '@app/ormseed.config';

export default new DataSource(ormseedConfig);
