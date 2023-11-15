create table students(

  id int auto_increment not null,
  name varchar(100) not null,
  email varchar(12) not null,
  telephone varchar(10) not null,
  twitter varchar(100),
  facebook varchar(100),
  instagram varchar(100),
  country varchar(50) not null,

  constraint DE_twitter default null,
  constraint DE_facebook default null,
  constraint DE_instagram default null,

  constraint PK_idStudent primary key(id);

  constraint FK_
);