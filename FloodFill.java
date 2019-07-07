package main;

/*
 *  MIT License -> Feel Free to Use for fun or work or for teaching ETC. Have fun and Enjoy! 
 *  
 *  Tyler Jaggers -> Overidon Omnimedia 2019
 *  
 *  LINKEDIN -> https://www.linkedin.com/in/tylerstansfieldjaggers/
 *  
 *  Self-Replicating Flood-Fill 
 * 
 *  v0001A -> Find the Smallest Number of Distance Units to the GOAL
 *  
 *  NOTES: 
 *  
 *  In this version there is a debug variable called: worldDebug
 *  
 *  The worldDebug boolean shows the user what the current branch is doing in the system. 
 *  WARNING -> There is a significant delay for the debug so I wouldn't use it if the World ( grid ) is too big or if you're in a hurry. 
 *  
 *  There is also a debug variable called: pathDebug
 *  This is going to be used in later versions for storing the actual path to the GOAL (IE: The directions required to get to the goal). 
 */

public class FloodFill {
	

	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		int [][] board = new int[8][10];
		 
		fill2DArray(board);
		
		
		Tree tree = new Tree(board);
		
		System.out.println("The fastest path to the goal is: " + tree.fastestPath);
		
		
	}
	

	
	public static void fill2DArray(int[][] arr) {
		
	  for (int row = 0; row < arr.length; row ++ ){
			  	
		for (int col = 0; col < arr[0].length; col++) {
				
			
			int roll = (int) (Math.random() * 10);
			
			if ( roll > 8){
				arr[row][col] = 1;
			} else {
				arr[row][col] = 0;
			}
			
		}	
	  }	
	}
	
	  public static void displayArray(int[] arr) {
			

			System.out.print("\n[ ");
			
			for (int i = 0; i < arr.length; i++) {
				if (i == arr.length - 1) {
					System.out.print(arr[i]);
				} else {
					System.out.print(arr[i] + ", ");
				}
			}
			
			System.out.print(" ]\n");
		}
	  
	  


}

class Tree {
	
	int [][] world;
	
	int fastestPath = -1; 
	
	public static boolean worldDebug = true; 
	public static boolean pathDebug = false; 
	
	
	Tree (int[][] world) {
		
		this.world = world; 
		

		
		// randomize the position of the catalyst 
		int cat_row = (int) ( Math.random() * world.length);
		int cat_col = (int) ( Math.random() * world[0].length);
		
		
		int goal_row = (int) ( Math.random() * world.length);
		
		this.world[cat_row][cat_col] = 5;
		
		// make sure the goal_row and catalyst row do not overlap... 
		if ( goal_row == cat_row) {
			if ( cat_row == 0) {
				goal_row = 6;
			} else {
				goal_row = 0; 
			}
		}
		
		int goal_col = (int) ( Math.random() * world[0].length);
		
		
		// a 7 will represent the goal 
		this.world[goal_row][goal_col] = 7;
		this.display();

		Node catalyst = new Node(this.world, cat_row, cat_col, 0);
		

		
	}
	
	// This is the tree's display method 
	void display() {
		
		System.out.println("\n ***** -> BELOW is the WORLD from the TREE's Perspective <---  ******* \n");
		
		display2DArray(this.world);
	}
	
	  public void display2DArray(int[][] arr) {

		  for (int row = 0; row < arr.length; row ++ ){
			  
			  System.out.print("\n[ ");
				
				for (int i = 0; i < arr[0].length; i++) {
					if (i == arr[0].length - 1) {
						System.out.print(arr[row][i]);
					} else {
						System.out.print(arr[row][i] + ", ");
					}
				}
				
				System.out.print(" ]");
		  }	
		  
		  System.out.println("");
	  }
	
	public  int[][] cleanCopy2DArray ( int[][] arr){
		
		int[][] modified = new int[arr.length][arr[0].length];
		
		
		  for (int row = 0; row < arr.length; row ++ ){
			  	
				for (int col = 0; col < arr[0].length; col++) {
						
					
					modified[row][col] = arr[row][col];
					
				}	
		  }	
		  
		  return modified;
	}
	
	
	private class Node  {
		int [] [] world; 
		
		int row; 
		int col; 
		
		// this field represents the distance that this Node has travelled so far. 
		int distTrav;
		
		boolean debug = true; 
		
		private Node ( int [] [] world , int row, int col, int distTrav) { 
			
			// copy the world
			this.world = cleanCopy2DArray(world);
			
			// the row and column represent the row and column where this node will be placed in the world
			this.row = row; 
			this.col = col; 
			
			this.distTrav = distTrav;
			
			this.world[row][col] = 5; 
			
			if ( worldDebug) {
				
				try {
					Thread.sleep(6);
					this.display();
				} catch (Exception e) {
					
					System.out.println("There was an exception of: " + e);
				}
			}
			
			
			this.checkNearby();
		}
		
		void display () {
			
			if ( this.debug) {
				
				System.out.println("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
				System.out.println("\n 000000 -> BELOW is the WORLD from this Node's Perspective <---  00000 \n");
				
				
				
				display2DArray(this.world);
			}
		
			
		// end of the display method 
		}
		
		
		void checkNearby() {
			
			// check for the goal if a fastestPath has not been found yet ... 
			// ... or else if this one is potentially better ;) 
			if ( fastestPath == -1 || this.distTrav + 1< fastestPath) {
				this.checkEast();
				this.checkNorth();
				this.checkWest();
				this.checkSouth();
			}
			
		// end of the checkNearby method	
		}
		
		void setFastestPath() {
			
			// only set the path if one extra unit more of travel is less than the 
			fastestPath = this.distTrav + 1; 
			
		}
		
	
		
		void checkNorth() {
			
			if ( this.row > 0 ) {
				
				int area = this.world[this.row - 1][this.col] ;
				
				switch (area) {
				
					case 0:
						if ( pathDebug) System.out.println("There is an empty path to the NORTH... I should EXPLORE this way.");	
						new Node(this.world, this.row - 1, this.col, this.distTrav + 1);
						break;
						
					case 1:
						if ( pathDebug) System.out.println("There is a WALL to the NORTH...MY PATH IS BLOCKED.");
						break;
						
					case 5:
						if ( pathDebug) System.out.println("I've checked the path to the NORTH...there is no need to do it again.");
						break;
					case 7:
						if ( pathDebug) System.out.println("I have found the GOAL at the ROW of " + (this.row -1) + " and the COLUMN of: " + this.col);
						
						setFastestPath();
					
						break;
				// end of the are switch
				}	
				
			// end of the row > 0 check 	 
			}
		// end of the checkNorth method.
		}
		
		void checkSouth() {
			
			if ( this.row < this.world.length - 1 ) {
				
				int area = this.world[this.row + 1][this.col] ;
				
				switch (area) {
				
					case 0:
						
						if ( pathDebug)  System.out.println("There is an empty path to the SOUTH... I should EXPLORE this way.");
						
						new Node(this.world, this.row + 1, this.col, this.distTrav + 1);
						break;
						
					case 1:
						if ( pathDebug) System.out.println("There is a WALL to the SOUTH...MY PATH IS BLOCKED.");
						break;
						
					case 5:
						if ( pathDebug) System.out.println("I've checked the path to the SOUTH...there is no need to do it again.");
						break;
					case 7:
						if ( pathDebug) System.out.println("I have found the GOAL at the ROW of " + (this.row + 1) + " and the COLUMN of: " + this.col);
						setFastestPath();
						break;
				// end of the are switch
				}	
				
			// end of the this.row < this.world.length - 1 check 	 
			}
		// end of the checkSouth method.
		}
		
		void checkEast() {
			
			if ( this.col < this.world[0].length - 1 ) {
				
				int area = this.world[this.row][this.col + 1] ;
				
				switch (area) {
				
					case 0:
						if ( pathDebug) System.out.println("There is an empty path to the EAST... I should EXPLORE this way.");
						new Node(this.world, this.row, this.col + 1, this.distTrav + 1);
						break;
						
					case 1:
						if ( pathDebug)System.out.println("There is a WALL to the EAST...MY PATH IS BLOCKED.");
						break;
						
					case 5:
						if ( pathDebug)System.out.println("I've checked the path to the EAST...there is no need to do it again.");
						break;
					case 7:
						if ( pathDebug) System.out.println("I have found the GOAL at the ROW of " + (this.row ) + " and the COLUMN of: " + (this.col +1 ));
						setFastestPath();
						break;
				// end of the are switch
				}	
				
			// end of the this.col < this.world[0].length - 1 check 	 
			}
		// end of the checkEAST method.
		}
		
		void checkWest() {
			
			if ( this.col > 0) {
				
				int area = this.world[this.row][this.col - 1] ;
				
				switch (area) {
				
					case 0:
						
						if ( pathDebug) System.out.println("There is an empty path to the WEST... I should EXPLORE this way.");
						new Node(this.world, this.row, this.col - 1, this.distTrav + 1);
						break;
						
					case 1:
						if ( pathDebug) System.out.println("There is a WALL to the WEST...MY PATH IS BLOCKED.");
						break;
						
					case 5:
						if ( pathDebug)System.out.println("I've checked the path to the WEST...there is no need to do it again.");
						break;
					case 7:
						if ( pathDebug) System.out.println("I have found the GOAL at the ROW of " + (this.row ) + " and the COLUMN of: " + (this.col -1) );
						setFastestPath();
						break;
				// end of the are switch
				}	
				
			// end of the this.col > 0 check 	 
			}
		// end of the checkWEST method.
		}
		
	// end of the Node class 
	}
	
// end of the Tree class 	
}
