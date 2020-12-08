create schema kviz;
/*
1.User 
		1.User ID (Unique id)
		2.Email/username()
		3.Mobile no
		4.Password
		5.created at
		6.full Name(kuldeep singh)laxman patil , laxman patil */
use kviz;
create table users(
user_id bigint primary key auto_increment,
email varchar(100) not null unique,
mobile_no varchar(12) not null,
paasword varchar(250) not null,
created_at datetime,
fullname varchar(250)not null
);

select * from users;

/*
2.Quiz 
		1.Quiz id
		2.User Id(host id / teacher ) //lax  1. usa 2.india 3.nepal
		3.created at
		4.tittle//
		5.Description//50
		6.Overall timer 
		7.Quiz_present_Date
		8.quiz_pin(sequential id)*/
CREATE TABLE Quiz (
    quizz_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL UNIQUE,
    created_at DATETIME,
    tittle VARCHAR(70) NOT NULL,
    description VARCHAR(250) NOT NULL,
    overall_timer INT,
    quiz_present_date DATE,
    quiz_thumbnail blob,
    quiz_pin VARCHAR(250)
);
select * from Quiz;
/*3.Question
		1.Question Id..
		2.Quiz_id
		3.question_type() 
		4.Question_statement
		5.serial_no 
		6.Difficulty
		7.individiual_Timer
		8.Correct_option
		9.max_pointts//100-
		10.Question_Image*/
create table question(
question_id int primary key auto_increment,
quiz_id int not null,
question_type Enum('MCQ','Fillup','Polling') not null,
question_statement varchar(250) not null,
serial_no int not null,
difficulty Enum('Easy','Medium','Hard') not null,
question_timer int not null,
correct_option varchar(50),
max_points int not null,
question_image longblob
);

desc question;

/*
4.options
		1.option_id
		2.question_id
		3.option statement
		4.serial(A , B , C ,D)
*/
create table options(
option_id int primary key auto_increment,
question_id int not null,
option_statement varchar(50) not null,
serial_no int not null
 );
 
 /*
 5.Result
		1.result_id.
		2.quizz id .
		3. json 1  .
		4. json 2
		5.presented_date
		6.
 */
 create table result(
 result_id int primary key auto_increment,
 quiz_id int not null,
 rank_struct text not null,
 question_wise_dta text not null,
 presented_date date not null
 );
 /*
 attempted	
		1.userId
		2.quizzid
 */
 create table attempted(
 user_id int not null,
 quiz_id int not null
 );
 
 