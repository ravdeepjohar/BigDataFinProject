create table finstocks(
	exchange varchar(10),
	stock_symbol varchar(20),
	stockdate date,
	stock_price_open float ,
	stock_price_high float,
	stock_price_low float,
	stock_price_close float,
	stock_volume float,
	stock_price_adj_close float,
	PRIMARY KEY(stock_symbol,stockdate)
)
