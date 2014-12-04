simple-pagination
=================

simple javascript pagination

# Install #

```bash
# use bower
$ bower install simple-javascript-pagination --save
```

# Example #
```javascript
//set config
var pageData = pagination.getPages({
    totalRecords: 100, //total data records
    pageSize: 10, //records count for one page
    currentPage: 1, //the current page index
});

//Processed Data Result:
{
    totalRecords: 100,
    currentPage: 1,
    totalPage: 10,
    pageNumber: [{type:"pageNumber", number:1},...,{type:"plainText", text:"..."},...,{type:"nextPage", number:2}]
}
```