# MongoDB Aggregation Pipeline Error with Null Values in $group Stage

This repository demonstrates a common error in MongoDB aggregation pipelines when dealing with null values in the `$group` stage.  The provided code showcases an incorrect pipeline and its corrected version.  Understanding this issue is crucial for writing accurate and reliable aggregation queries.

## Problem

The original aggregation pipeline attempts to sum values, potentially including nulls.  The `$sum` operator ignores nulls, leading to incorrect results.

## Solution

The solution uses the `$ifNull` operator to handle null values.  This ensures that null values are replaced with a default value (0 in this case) before the summation, resulting in a correct count.