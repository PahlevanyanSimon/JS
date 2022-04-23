

 let arr = [1,2,4,5,8,15,24,37,47,54];


  function binary_search(arr, target){

		  let start = 0;
	      let end = arr.length - 1;

	      while(start <= end)
		  {
			  let mid = Math.floor((start + end)/2);
			  if(arr[mid] === target)
			  { return mid; }
			  else if(arr[mid] < target)
			  { start = mid + 1; }
			  else{
			  end = mid - 1; }
		  }
		  return -1;
	}

      console.log(binary_search(arr, 37));
