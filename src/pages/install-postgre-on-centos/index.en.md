---
title: 'Setup PostgreSQL'
date: '2020-04-01'
spoiler: open source database
---

### Install
OS: CentsOS / Install Type: RPM

1. To add and update the pgdg repository to get
PostgreSQL 11, run the following command:
```bash
dnf install https://download.postgresql.org/pub/repos/yum/reporpms/EL-8-x86_64/pgdg-redhat-repo-latest.noarch.rpm
```

2. To install the server packages:
```bash
dnf install postgresql11-server
```

3. To initialize the database and enable automatic start:
```bash
/usr/pgsql-11/bin/postgresql-11-setup initdb
systemctl enable postgresql-11
systemctl start postgresql-11
```

4. Automatic startup or auto-initialization of data
directory is not enabled for Red Hat family distributions due to some policies. So, you need to perform the following steps manually to complete your database installation.
```bash
service postgresql initdb
chkconfig postgresql on
```
### Create&Access Database
To create/drop a new database, in this example named mydb, you use the following command:
```bash
su postgres
createdb mydb  #create database
dropdb mydb  # drop database
```
The psql program has a number of internal commands that are not SQL commands. They begin with the backslash character, “\”. For example, you can get help on the syntax of various PostgreSQL SQL commands by typing:`\h`,To get out of psql, type:`\q`.
```bash
psql mydb  #active mydb database
\h  # get help
\q  # get out
```

The last line printed out by psql is the prompt, and it indicates that psql is listening to you and that you can type SQL queries into a work space maintained by psql. Try out these commands:
```bash
mydb=> SELECT version();
                                         version
------------------------------------------------------------------------------------------
 PostgreSQL 11.7 on x86_64-pc-linux-gnu, compiled by gcc (Debian 4.9.2-10) 4.9.2, 64-bit
(1 row)

mydb=> SELECT current_date;
    date
------------
 2016-01-07
(1 row)

mydb=> SELECT 2 + 2;
 ?column?
----------
        4
(1 row)
```