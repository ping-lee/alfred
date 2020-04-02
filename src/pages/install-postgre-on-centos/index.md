---
title: 'Ⅰ起步：PostgreSQL'
date: '2020-04-01'
spoiler: open source database
cta: postgres
---

在关系型RDBMS的世界里，postgres是备受青睐的，原因得益于两点，像业界oracle数据库一样具有`可编程性`,同时它是免费开源的。拥有复杂查询、外键、触发器、视图、事物完整性、多版本并发控制、数据类型、函数、操作符、聚集函数、索引方法、过程语言如`PL/PgSQL、Perl、Python、Tcl、Ruby、C或者C++、R`。

### 安装
操作系统: cenos7 / 安装类型：RPM

1. 要添加和更新pgdg存储库以获取PostgreSQL 11，在执行下面命令之前我认为你以及安装好rmp软件包管理工具`dnf`，请运行以下命令:

```bash
dnf install https://download.postgresql.org/pub/repos/yum/reporpms/EL-8-x86_64/pgdg-redhat-repo-latest.noarch.rpm
```

2. 把postgres添加到repo后，安装服务器软件包（postgres服务程序），安装服务程序的同时客户端程序作为依赖会一起安装，请执行以下操作：

```bash
dnf install postgresql11-server
```

3. 初始化数据库并启用自动启动：

```bash
/usr/pgsql-11/bin/postgresql-11-setup initdb
systemctl enable postgresql-11
systemctl start postgresql-11
```

4. 由于某些策略，没有为Red Hat系列发行版启用数据目录的自动启动或自动初始化。因此，您需要手动执行以下步骤来完成数据库安装。

```bash
service postgresql initdb
chkconfig postgresql on
```
### 创建和访问数据库
要创建/删除一个新数据库，在这个名为mydb的示例中，可以使用以下命令：

```bash
su postgres
createdb mydb  #create database
dropdb mydb  # drop database
```
psql程序有许多不是SQL命令的内部命令。它们以反斜杠字符“\”开头。例如，您可以通过键入：`\h`获得各种PostgreSQL SQL命令语法的帮助，若要退出psql，请键入：`\q`。

```bash
psql mydb  #active mydb database
\h  # get help
\q  # get out
```

psql输出的最后一行是提示，它表示psql正在监听您，您可以在psql维护的工作空间中键入SQL查询。尝试以下命令：
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

### 管理配置数据库
```bash
pg_ctl status -D /var/lib/pgsql/data # 查看状态
pg_ctl stop -D /var/lib/pgsql/data # 关闭
pg_ctl start -D /var/lib/pgsql/data # 启动
pg_ctl restart -D /var/lib/pgsql/data # 重启
pg_ctl initdb -D /var/lib/pgsql/data # 初始化
```

客户端连接不上数据库时要修改两个文件内容：
```bash
#  /var/lib/pgsql/data/postgresql.conf
listen_addresses = '*'
#  /var/lib/pgsql/data/pg_hba.conf
host    all             all             your_ip/32         trust
#  FATAL: role "mydb" is not permitted to log in
alter user mydb login;
# permission denied for relation test
psql postgres
\c mydb # 切换到mydb数据库
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO mydb; # 赋予所有表的所有权限给mydb
```