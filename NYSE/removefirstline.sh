for files in `ls *.csv` #list of all .dat file
do
cp $files $files.bck #make a backup of the file
sed '1d' -i $files #remove the first line of the file
done
