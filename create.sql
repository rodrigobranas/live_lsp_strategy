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

insert into branas.grade (student_id, exam, value) values (2410002, 'P1', 5.7);
insert into branas.grade (student_id, exam, value) values (2410002, 'P2', 5.9);

insert into branas.grade (student_id, exam, value) values (2410004, 'P1', 10);
insert into branas.grade (student_id, exam, value) values (2410004, 'P2', 9);
insert into branas.grade (student_id, exam, value) values (2410004, 'P3', 6);
insert into branas.grade (student_id, exam, value) values (2410004, 'P4', 2);

insert into branas.grade (student_id, exam, value) values (2410005, 'P1', 12);

create table branas.average (
	student_id integer,
	value numeric
);
