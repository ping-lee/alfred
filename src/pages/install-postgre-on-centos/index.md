---
title: 'Ⅰ起步：postgre'
date: '2020-04-01'
spoiler: open source database
---

### 安装
OS: CentsOS / Install Type: RPM

1. 要添加和更新pgdg存储库以获取PostgreSQL 11，请运行以下命令:

```bash
dnf install https://download.postgresql.org/pub/repos/yum/reporpms/EL-8-x86_64/pgdg-redhat-repo-latest.noarch.rpm
```

2. 要安装服务器软件包，请执行以下操作：

```bash
dnf install postgresql11-server
```

3. 要初始化数据库并启用自动启动：

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