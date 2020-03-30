---
title: 'Five core SQL statements'
date: '2020-01-11'
spoiler: Basic SQL statement example.
cta: plsql
---

## select
Select statements are used to extract data from one or more tables or other database objects. General select statements are like this:
```sql
select c.customer_id, 
       count(o.order_id) as orders_ct
from oe.customers c
join oe.orders o
on c.customer_id = o.customer_id
where c.gender = 'F'
group by c.customer_id
having count(o.order_id) > 4
order by orders_ct, c.customer_id ;
```

The select list lists which columns need to be displayed in the final result set returned by the query. These columns can be the result of an actual column, an expression, `or even a select statement in the data table`.
```sql
select c.customer_id,
       c.cust_first_name||' '||c.cust_last_name,
       (select e.last_name from hr.employees e where e.employee_id = c.account_mgr_id) as acct_mgr
from oe.customers c ;
```

### insert
Insert statements are used to add rows to a table, partition, or view.
```sql
insert into hr.jobs j (j.job_id, j.job_title, j.min_salary, j.max_salary)
values('IT_PM', 'Project Manager', 5000, 11000) ;

rollback;

insert into scott.bonus (ename, job, sal)
select ename,
       job, 
       sal * .10
from scott.emp ;

-- 多表插入
insert all
when sum_orders < 10000 then
into small_customers
when sum_orders >= 10000 and sum_orders < 100000 then
into medium_customers
else
into large_customers
select customer_id, sum(order_total) as sum_orders
from oe.orders
group by customer_id ;
```

### update
The function of the update statement is to change the column value of the original row in the table. The syntax of this statement consists of three parts: update, set, and where. The update clause is used to specify the table to be updated, the set clause is used to indicate which columns have changed and adjusted values, and the where clause is used to filter the rows to be updated according to conditions.
```sql
-- Example 1: Update a single column value using an expression
update employees2
set salary = salary * 1.10 -- increase salary by 10%
where department_id = 90 ;

-- Example 2: Update a single column value using a subquery
-- 可用于两表列数据同步
update employees
set salary = (select employees2.salary
                from employees2
                where employees2.employee_id = employees.employee_id -- 主键匹配
                and employees.salary != employees2.salary) --相同的不更新
where department_id = 90 ;

-- Example 3: Update single column using using subquery in WHERE clause to determine which rows to update
update employees
set salary = salary * 1.10
where department_id in (select department_id
                          from departments
                          where department_name = 'EXecutive')  ;

-- Example 4: Update a table using a SELECT statement to define the table and column values
update (select e1.salary,
               e2.salary as new_sal,
        from employees e1, employees2 e2
        where e1.employee_id = e2.employee_id
          and e1.department_id = 90)
set salary = new_sal ;

-- Example 5: Update multiple columns using a subquery
update employees
set (salary, commission_pct) = (select employees2.salary, .10 comm_pct
                                  from employees2
                                  where employees2.employee_id = employees.emloyee_id
                                    and employees.salary != employees2.salary)
where department_id = 90 ;
-- 比较Example 2、Example 4、Example 5。
```
### delete
The delete statement is used to remove data rows from the table.
```sql
-- Example 1: Delete rows from specified table using a filter condition in the WHERE clause
delete from employees2
where department_id = 90 ;

rollback ;

-- Example 2: Delete rows suing a subquery in the FROM clause
delete from (select * from employees2 where department_id = 90) ;

rollback ;

-- Example 3: Delete rows from specified table using a subquery in the WHERE clause
delete from employees2
where department_id in (select department_id
                          from departments
                          where department_name = 'Executive') ;

rollback ;
```

### merge
The merge statement can conditionally get the data rows to be updated or inserted into the table, and then update or insert rows into the table from one or more sources.
```sql
-- 假设由两个表employees和dept60_bonuses，两表的数据如下
select employee_id, last_name, salary 
from employees 
where department_id = 60 ;

EMPLOYEE_ID     LAST_NAME     SALARY
------------------------------------
103             Hunold        9000
104             Ernst         6000
105             Austin        4800
106             Pataballa     4800
107             Lorentz       4200

select * from dept60_bonuses ;

EMPLOYEE_ID     BONUS_AMT
-------------------------
103             0
104             100
105             0


merge into dept60_bonuses b
using (
        select employee_id, salary, department_id
        from employees
        where department_id = 60
      ) e
on (b.employee_id = e.employee_id)
when matched then
  update set b.bonus_amt = e.salary * 0.2
  where b.bonus_amt = 0
  delete where (e.salary > 7500)
when not matched then
  insert (b.employee_id, b.bonus_amt)
  values (e.employee_id, e.salary * 0.1)
  where (e.salary < 7500)

select * from dept60_bonuses ;

EMPLOYEE_ID     BONUS_AMT
-------------------------
104             100
105             960
106             480
107             420
```
