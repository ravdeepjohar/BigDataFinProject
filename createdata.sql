create table customer(
	name varchar(80),
	city varchar(20),
	ssn  integer PRIMARY KEY,
	dob  date,
	email varchar(40)
)

create table customerport(
	ssn integer,
	p_id integer,
	CONSTRIANT fk_price FOREIGN KEY(ssn) REFERENCES customer(ssn),
	CONSTRIANT fk_price FOREIGN KEY(p_id) REFERENCES portfolio(id)
)

create table stock(
	name varchar(40) PRIMARY KEY,
	symbol varchar(40),
	m_id integer,
	CONSTRIANT fk_price FOREIGN KEY(m_id) REFERENCES market(m_id)
)

create table price(
	stock_date date,
	open_pride float,
	close_price float,
	low_price float,
	high_price float,
	name varchar(80),
	CONSTRIANT fk_price FOREIGN KEY(name) REFERENCES stock(name)
)

create table portfolio(
	id integer PRIMARY KEY,
	portfolio_name varchar(40),
	name varchar(80),
	CONSTRIANT fk_price FOREIGN KEY(name) REFERENCES stock(name)
)

create table market(
	m_id integer PRIMARY KEY,
	market_name varchar(40),
	market_location varchar(40),
	start_time time,
	close_time time
)
