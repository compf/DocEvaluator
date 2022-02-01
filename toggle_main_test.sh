if [ -e ./test_main.txt ]
then
    mv ./test_main.txt ./test_main.txt1
else
    mv ./test_main.txt1 ./test_main.txt
fi