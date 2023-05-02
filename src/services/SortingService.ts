/*
  Generic Method to sort the list
  */
const SortingService = (data: any,sortingparameters:any):any => {
    let dataforsorting = [...data]
    if (sortingparameters.sort === 'asc') {
        dataforsorting.sort((a: any, b: any) => (a[sortingparameters.field] > b[sortingparameters.field] ? 1 : -1))
    } 
    if (sortingparameters.sort === 'dsc') {
        dataforsorting.sort((a: any, b: any) => (a[sortingparameters.field] < b[sortingparameters.field] ? 1 : -1))
    }
    return dataforsorting
  } 
export default SortingService;
