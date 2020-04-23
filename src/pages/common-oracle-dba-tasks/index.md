---
title: 'Oracle DBA常见任务'
date: '2020-04-07'
spoiler: oracle DBA 手册
cta: plsql
---

作为Oracle数据库管理员（DBA），您可以期望参与各种任务。例如：
- 安装Oracle软件
- 创建Oracle数据库
- 对数据库和软件执行更新操作
- 启动和停止数据库实例
- 管理数据库存储结构
- 管理用户和安全
- 管理数据库对象，如表、索引和视图
- 备份数据库且必要时执行恢复操作
- 监控数据库的状态并根据需要采取预防或纠正措施
- 监视和调整数据库性能
- 诊断关键错误并将其报告给Oracle支持服务

### 安装Oracle软件
这里只说明Linux操作系统上安装Oracle数据库，Windows上的安装不在此讨论，这是因为在Linux上安装时碰到的问题较多，我们寻找出一个安装成功的最短路径，遇到具体的故障再具体说明。
- 下载[Oracle Database 19c (19.3) Software (64-bit)](https://www.oracle.com/technetwork/database/enterprise-edition/downloads/oracle19c-linux-5462157.html)
- Oracle Installation Prerequisites

```bash
yum install -y oracle-database-preinstall-19c
```
- 其他步骤

更改`oracle`用户密码。
```bash
passwd oracle
```
Set secure Linux to permissive by editing the "/etc/selinux/config" file, making sure the SELINUX flag is set as follows.
```bash
SELINUX=permissive
```
Once the change is complete, restart the server or run the following command.
```bash
setenforce Permissive
```
If you have the Linux firewall enabled, you will need to disable or configure it, as shown here or here. To disable it, do the following.
```bash
systemctl stop firewalld
systemctl disable firewalld
```
Create the directories in which the Oracle software will be installed.
```bash
mkdir -p /u01/app/oracle/product/19.0.0/dbhome_1
mkdir -p /u02/oradata
chown -R oracle:oinstall /u01 /u02
chmod -R 775 /u01 /u02
```
> The scripts are created using the cat command, with all the "$" characters escaped. If you want to manually create these files, rather than using the cat command, remember to remove the "\" characters before the "$" characters.

Create a "scripts" directory.
```bash
mkdir /home/oracle/scripts
```
Create an environment file called "setEnv.sh". The "$" characters are escaped using "\". If you are not creating the file with the cat command, you will need to remove the escape characters.
```bash
cat > /home/oracle/scripts/setEnv.sh <<EOF
# Oracle Settings
export TMP=/tmp
export TMPDIR=\$TMP

export ORACLE_HOSTNAME=ol7-19.localdomain
export ORACLE_UNQNAME=cdb1
export ORACLE_BASE=/u01/app/oracle
export ORACLE_HOME=\$ORACLE_BASE/product/19.0.0/dbhome_1
export ORA_INVENTORY=/u01/app/oraInventory
export ORACLE_SID=cdb1
export PDB_NAME=pdb1
export DATA_DIR=/u02/oradata

export PATH=/usr/sbin:/usr/local/bin:\$PATH
export PATH=\$ORACLE_HOME/bin:\$PATH

export LD_LIBRARY_PATH=\$ORACLE_HOME/lib:/lib:/usr/lib
export CLASSPATH=\$ORACLE_HOME/jlib:\$ORACLE_HOME/rdbms/jlib
EOF
```
Add a reference to the "setEnv.sh" file at the end of the "/home/oracle/.bash_profile" file.
```bash
echo ". /home/oracle/scripts/setEnv.sh" >> /home/oracle/.bash_profile
```
Create a "start_all.sh" and "stop_all.sh" script that can be called from a startup/shutdown service. Make sure the ownership and permissions are correct.
```bash
cat > /home/oracle/scripts/start_all.sh <<EOF
#!/bin/bash
. /home/oracle/scripts/setEnv.sh

export ORAENV_ASK=NO
. oraenv
export ORAENV_ASK=YES

dbstart \$ORACLE_HOME
EOF


cat > /home/oracle/scripts/stop_all.sh <<EOF
#!/bin/bash
. /home/oracle/scripts/setEnv.sh

export ORAENV_ASK=NO
. oraenv
export ORAENV_ASK=YES

dbshut \$ORACLE_HOME
EOF

chown -R oracle:oinstall /home/oracle/scripts
chmod u+x /home/oracle/scripts/*.sh
```
Once the installation is complete and you've edited the "/etc/oratab", you should be able to start/stop the database with the following scripts run from the "oracle" user.
```bash
~/scripts/start_all.sh
~/scripts/stop_all.sh
```
You can see how to create a Linux service to automatically start/stop the database [here](https://oracle-base.com/articles/linux/linux-services-systemd#creating-linux-services).

- 安装

Switch to the ORACLE_HOME directory, unzip the software directly into this path and start the Oracle Universal Installer (OUI) by issuing one of the following commands in the ORACLE_HOME directory. The interactive mode will display GUI installer screens to allow user input, while the silent mode will install the software without displaying any screens, as all required options are already specified on the command line.
```bash
# Unzip software.
cd $ORACLE_HOME
unzip -oq /path/to/software/LINUX.X64_193000_db_home.zip

# Interactive mode.
./runInstaller
```