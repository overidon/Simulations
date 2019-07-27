package main;

public class Core {
	
	public static boolean debug = false; 
	public static boolean animated = true; 
	
	public static boolean boat = false; 
	// begin the main driver method 
	public static void main(String[] args) {

		
		int [] arr = new int[26];
		
		fillArrWithRandInts(arr);
		
		displayArray(arr);
		
		sort(arr, 0, arr.length - 1);
		
		displayArray(arr);

	}
	
	public static void fillArrWithRandInts(int[] arr) {
		
		// fill this array with random numbas 
		
		for (int i = 0; i < arr.length; i++) {
			
			int rand = (int) (Math.random() * 100 ) - 100;
			arr[i] = rand;
			
			if ( !boat) {
				if ( i > 3) {
					arr[i] = 12;
					boat = true;
				}
			}
		}
	// 
	}
	
	public static void displayArray(int[] arr) {
		

		System.out.print("\n[ ");
		
		for (int i = 0; i < arr.length; i++) {
			if (i == arr.length - 1) {
				System.out.print("~" + arr[i] + "~");
			} else {
				
				if ( arr[i] == 12 || arr[i] == 20) {
					System.out.print("<=___=):");
				}else {
					System.out.print("~" + arr[i] + "~");
				}
				
			}
		}
		
		System.out.print(" ]\n");
	}
	  
	
	// arr is the primary array 
	// first subarray -> elements between l to m indices of arr
	// second subarray is ( m + l -> r) 
	// l -> left
	// m -> midpoint
	// r -> right 
	
	public static void merge(int arr[], int l, int m, int r ) {
		
		// store the sizes of the two subarrays that will be merged
		int n1 = m - l + 1;
		int n2 = r - m; 
		
		// create temp array 
		int L[] = new int[n1];
		int R[] = new int[n2];
		
		// copy data in the temp arrays 
		// LEFT ARRAY is arr[left index  + i]
		for ( int i = 0; i < n1; ++i) L[i] = arr[l + i];
		
		// RIGHT ARRAY 
		for ( int j = 0; j < n2; ++j) R[j] = arr[m + 1 + j];
		
		// merge the temporary arrays
		
		// initialize indices of the first and second array
		int i = 0, j = 0; 
		
		// the initial index of the merged subarray array
		int k = l;
		
		// while the loop (iterator) of i  is less than n1
		// and the index tracker for j 
		while(i < n1 && j < n2) {
			
			// if the element at the index of i within the subarray of L
			// is less than or equal to the element at the index of j in the subarry of R...
			if ( L[i] <= R[j]) {
				
				if ( debug ) {
					System.out.println("The element at the index of i of: " + i + " in LEFT SUB is " + L[i]);
					System.out.println("The element at the index of j of: " + j + " in RIGHT SUB is: " + R[j]);
					System.out.println("The array at the index of k of: " + k + " is now assigned the value of " + L[i]);
				}
				
				
				// the main array at the index of k
				// is assigned the value of the L sub-array at the index of i
				arr[k] = L[i];
				i++;
				
				if ( animated) {
					
					try {
						Thread.sleep(100);
						
						displayArray(arr);
					} catch (InterruptedException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
				
			// end of the LEFT at i less than R[j] check 
			} else {
				
				if ( debug ) {
					System.out.println("Assigning the array at k of: " + k );
					System.out.println("To have the value of R[j] " + R[j]);
				}
				
				
				arr[k] = R[j];
				j++;
				
				
				if ( animated) {
					
					try {
						Thread.sleep(100);
						
						displayArray(arr);
					} catch (InterruptedException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
			// end of else 
			}
			// increment k
			k++;
		}
		
		// Copy remaining element of L[] if there are any 
		while ( i < n1) {
			
			// TODO -> call display array before / after... 
			arr[k] = L[i];
			i++;
			k++;
		}
		
		// Copy remaining elements of R[] if there are any 
		while ( j < n2) {
			arr[k] = R[j];
			j++;
			k++;
		}
		
	// end of the merge method 
	}
	
	// the sort function does the heavy lifting 
	public static void sort ( int arr[], int l, int r) {
		
		// only do recursive calls as long as the left variable is less than the right variable 
		if ( l < r) {
			
			// find the middle point 
			int m = (l + r) /2 ;
			
			// call this function again on the first and second halves...
			sort(arr, l, m);
			sort(arr, m + 1, r);
			
			// merge the sorted halves
			merge(arr, l, m , r);
			
		}
	}
	

// end of the main method
}
