# MongoDB Aggregation Error: Handling Empty Arrays in $unwind

This repository demonstrates a common error encountered when using the `$lookup` and `$unwind` stages in MongoDB aggregations.  The issue arises when `$lookup` returns an empty array for the joined field, causing `$unwind` to throw an error.

The `bug.js` file contains code that reproduces the error. The `bugSolution.js` file provides a solution to handle empty arrays gracefully.

## How to Reproduce

1.  Ensure you have a MongoDB instance running and a collection named `myCollection` with a foreign key field.
2.  Run `bug.js`. If `anotherCollection` does not have matching entries for some entries in `myCollection`, an error will occur.

## Solution

The solution involves adding a `$match` stage before the `$unwind` to filter out documents where `joinedData` is empty.