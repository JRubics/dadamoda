#! /bin/sh
#
# script.sh
# Copyright (C) 2017 pavle <pavle@hp>
#
# Distributed under terms of the BSD 2-Clause license.
#

for d in $(ls -p | grep "/");
do
	cd $d
	rename 'DSC-000' 'DSC-' DSC-????.jpg
	rename 'DSC-00' 'DSC-' DSC-????.jpg
	rename 'DSC-0' 'DSC-' DSC-????.jpg
	cd ..
done
