drop schema design_patterns cascade;
create schema design_patterns;

create table design_patterns.grade (
	student_id integer,
	exam text,
	value numeric
);

insert into design_patterns.grade (student_id, exam, value) values (2410001, 'P1', 9);
insert into design_patterns.grade (student_id, exam, value) values (2410001, 'P2', 10);
insert into design_patterns.grade (student_id, exam, value) values (2410001, 'P3', 7);
insert into design_patterns.grade (student_id, exam, value) values (2410001, 'P4', 6);
insert into design_patterns.grade (student_id, exam, value) values (2410001, 'P5', 8);

create table design_patterns.average (
	student_id integer,
	value numeric
);
