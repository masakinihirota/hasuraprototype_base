
alter table "public"."articles" drop constraint "articles_author_id_fkey";

DROP TABLE "public"."articles";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- drop schema "private" cascade;

DROP TABLE "public"."users";

drop schema "private" cascade;
