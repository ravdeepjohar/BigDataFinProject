#!/bin/bash
rm fill.sql -f
fo="123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
for (( i=0; i<${#fo}; i++ ))
do
  echo "copy finstocks from '/home/finproject/NYSE/NYSE_daily_prices_"${fo:$i:1}".csv' delimiter ',' CSV;" >> fill.sql
done
