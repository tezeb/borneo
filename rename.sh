#!/bin/bash

extension=".jpg"

function help {
	if [ $1 -eq 1 ]; then echo "Missing argument"; fi
	echo "Usage: ";
	exit 1
}

if [ $# -eq 0 ]; then help; fi

echo "Changing directory to: $1" && cd $1
echo "Renaming all *$extension files"
list=`ls *$extension`
c=0
for i in $list; do
  mv "$i" $(printf '%04d.jpg' $c);
	((c++));
done
echo -n "Changing directory to: " && cd -
