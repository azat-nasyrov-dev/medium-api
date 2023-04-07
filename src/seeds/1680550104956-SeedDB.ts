import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDB1680550104956 implements MigrationInterface {
  name = 'SeedDB1680550104956';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs')`,
    );

    // password is 123
    await queryRunner.query(
      `INSERT INTO users (username, email, password) VALUES('foo', 'foo@gmail.com', '$2b$10$GOpQF83KzRZUth/s8VlcMehtkH7qC8qcFwDdU81LPnB4XW4bi27fC')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES('first-article', 'First article', 'first article desc', 'first article body', 'coffee,dragons', 1)`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES('second-article', 'Second article', 'second article desc', 'second article body', 'coffee,dragons', 1)`,
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(): Promise<void> {}
}
