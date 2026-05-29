create database Tamarineira;
use Tamarineira;

create table user(
    id        int primary key not null auto_increment,
    name      varchar(255) not null,
    email     varchar(255) not null unique,
    password  varchar(255) not null,
    createdAt datetime default current_timestamp()
);

create table quiz(
    id          int primary key not null auto_increment,
    userId      int not null,
    theme       varchar(30),
    title       varchar(255) not null,
    points      int,
    description varchar(255) not null,
    createdAt   datetime default current_timestamp(),
    constraint quiz_user foreign key (userId) references user(id) on delete cascade
);

create table question(
    id       int primary key not null auto_increment,
    quizId   int not null,
    question varchar(255) not null,
    constraint question_quiz foreign key (quizId) references quiz(id) on delete cascade
);

create table answer(
    id         int primary key not null auto_increment,
    questionId int not null,
    `text`     varchar(255) not null,
    isRight    tinyint(1) not null default 0,
    value      int not null default 0,
    constraint answer_question foreign key (questionId) references question(id) on delete cascade
);

create table play(
    id        int primary key not null auto_increment,
    userId    int not null,
    quizId    int not null,
    wrong     int not null default 0,
    `right`   int not null default 0,
    startedAt datetime default current_timestamp(),
    constraint play_user foreign key (userId) references user(id) on delete cascade,
    constraint play_quiz foreign key (quizId) references quiz(id) on delete cascade
);

create table play_answer(
    id         int primary key not null auto_increment,
    playId     int not null,
    questionId int not null,
    answerId   int not null,

    unique key uq_play_question (playId, questionId),

    constraint pa_play     foreign key (playId)     references play(id)     on delete cascade,
    constraint pa_question foreign key (questionId) references question(id) on delete cascade,
    constraint pa_answer   foreign key (answerId)   references answer(id)   on delete cascade
);