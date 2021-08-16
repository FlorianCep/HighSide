/*==============================================================*/
/* Nom de SGBD :  MySQL 5.0                                     */
/* Date de création :  01/07/2021 09:21:02                      */
/*==============================================================*/


drop table if exists ARTICLES;

drop table if exists CATEGORIES;

drop table if exists COMMENTAIRES;

drop table if exists USERS;

/*==============================================================*/
/* Table : ARTICLES                                             */
/*==============================================================*/
create table ARTICLES
(
   IDARTICLE            int not null auto_increment,
   IDUSER               int not null,
   IDCAT                int not null,
   CATEGORIE            varchar(1024) not null,
   TITRE                varchar(1024) not null,
   DESCRIPTION          text not null,
   CONTENU              text not null,
   DATE                 timestamp not null,
   IMAGE                varchar(1024) not null,
   NOTE                 int not null,
   NBLIKES              int not null,
   primary key (IDARTICLE)
);

/*==============================================================*/
/* Table : CATEGORIES                                           */
/*==============================================================*/
create table CATEGORIES
(
   IDCAT                int not null auto_increment,
   NOMCAT               varchar(1024) not null,
   primary key (IDCAT)
);

/*==============================================================*/
/* Table : COMMENTAIRES                                         */
/*==============================================================*/
create table COMMENTAIRES
(
   IDCOM                int not null auto_increment,
   IDARTICLE            int not null,
   PSEUDO               varchar(1024) not null,
   COMMENTAIRE          varchar(1024) not null,
   DATECOM              timestamp not null,
   primary key (IDCOM)
);

/*==============================================================*/
/* Table : USERS                                                */
/*==============================================================*/
create table USERS
(
   IDUSER               int not null auto_increment,
   NOM                  varchar(1024) not null,
   MDP                  varchar(1024) not null,
   ISADMIN              bool not null,
   primary key (IDUSER)
);

alter table ARTICLES add constraint FK_APPARTENIR foreign key (IDCAT)
      references CATEGORIES (IDCAT) on delete restrict on update restrict;

alter table ARTICLES add constraint FK_POSTER foreign key (IDUSER)
      references USERS (IDUSER) on delete restrict on update restrict;

alter table COMMENTAIRES add constraint FK_COMMENTER foreign key (IDARTICLE)
      references ARTICLES (IDARTICLE) on delete restrict on update restrict;

