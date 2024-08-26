drop schema branas cascade;
create schema branas;

create table branas.grade (
	student_id integer,
	exam text,
	value numeric
);

insert into branas.grade (student_id, exam, value) values (2410001, 'P1', 9);
insert into branas.grade (student_id, exam, value) values (2410001, 'P2', 10);
insert into branas.grade (student_id, exam, value) values (2410001, 'P3', 7);
insert into branas.grade (student_id, exam, value) values (2410001, 'P4', 6);
insert into branas.grade (student_id, exam, value) values (2410001, 'P5', 8);

insert into branas.grade (student_id, exam, value) values (2410003, 'P1', 12);
insert into branas.grade (student_id, exam, value) values (2410003, 'P2', 20);

create table branas.average (
	student_id integer,
	value numeric
);
