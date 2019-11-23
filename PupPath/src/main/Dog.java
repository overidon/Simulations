package main;

import java.util.HashSet;

public class Dog extends Node {
	
	int dir; 
	
	HashSet<Pos>mem = new HashSet<Pos>();
	
	int eaten;
	int maxFood;
	
	int stuckCur, stuckMax;
	
	boolean stuck;
	
	// recursive pup memory 
	public Node[][] memWorld = new Node[12][16];

	public Dog(int row, int col, String name, HashSet<Pos> mem) {
		super(row, col, name);
		
		this.eaten = 0;
		
		this.maxFood = Game.countFood();
		
		this.stuckMax = 4;
		this.stuckCur = 0;
		
		
		
	// end of the Dog constructor
	}
	
	
	
	
	
	
	public void initialMemory(HashSet<Pos> mem) {
		
		for (Pos p : mem) this.mem.add(p);
			
	// end of the remember method
	}
	
	public void displayMemory() {
		
		System.out.println("\n ****** DOG MEMORY ******* ");
		
		for (Pos p : this.mem) {
			System.out.println(p);
		}
		
		System.out.println("I have eaten so far: " + this.eaten + " dog food items.");
	
	// end of the displayMemory method
	}
	
	public void displayPup() {
		
		System.out.println("\nThe puppy ROW is: " + this.row);
		System.out.println("The puppy COL is: " + this.col + "\n");
		
	// end of the displayPup method	
	}
	
	
	
	
	
	public boolean verifyNotInMem( int dir) {
		
		// we'll set our checking row to our rows and columns... 
		int R = this.row;
		int C = this.col;
		
		switch(dir) {
		
		case 0:
			C++;
			break;
			
		case 1:
			R--;
			break;
		
		case 2:
			C--;
			break;
		case 3:
			R++;
			break;
		}
		
		// create a temporary checker for the position that we want to check
		Pos check = new Pos(R, C);
		
		// for every position p in our doggies memory...
		for (Pos p : this.mem) {
			
			if (p.equals(check)) {
				System.out.println("\n This dog has already been to the row of: " + p.row + " and the col of: " + p.col );
				return false;
			
			}
			
		}
		
		// return true ONLY if this attempted position is not in the doggies memory!
		return true;
		
	// end of the verifyNotInMem method
	}
	
	public boolean canIWalkThere(int dir) {
		
		boolean debug = false;
		
		int checkRow = this.row;
		int checkCol = this.col;
		
		// convert the direction into a checkable row and column
		
		switch ( dir) {
		
		case 0:
			if (debug )System.out.println("The Pup wants to walk to the EAST.");
			checkCol = this.col + 1;
			break;
			
		case 1:
			if (debug )System.out.println("The Pup wants to walk to the NORTH.");
			checkRow = this.row - 1;
			break;
			
		case 2:
			if (debug )System.out.println("The Pup wants to walk to the WEST.");
			checkCol = this.col - 1;
			break;	
			
		case 3:
			if (debug )System.out.println("The Pup wants to walk to the SOUTH.");
			checkRow = this.row + 1;
			break;	
			
		default:
			if (debug )System.out.println("ERROR!!!!!!");
			break;
		}
		
		// out of bounds of the world check...
		if ( checkRow < 0 || checkRow >= Game.world.length || checkCol < 0 || checkCol >= Game.world[0].length ) {
			
			if (debug )System.out.println("The Pup is at the edge of the world and barks at the moon! ** WOOF **");
			
			this.stuckCur++;
			if ( this.stuckCur >= this.stuckMax)this.stuck = true;
			
			// since you can't walk there return false...
			return false;
		}
		
		// now we get to grab whats on the ground
		
		if (debug )System.out.println("\n CheckRow -> " + checkRow + " :: CheckCol -> " + checkCol);
		
		Node ground = Game.world[checkRow][checkCol];
		
		int c = ground.contains;
		
		if (debug )System.out.println("The Doggy sees " + Loader.nameMap.get(c) +  " to the " + Loader.dirMap[dir]);
		
		// end of part 1...
		
	
		
		// first verify that we haven't already been here...
		// ... and it is not a wall
		if ( this.verifyNotInMem(dir) && c != 1 && c != 5) {
			
			if (debug )System.out.println("The Doggy can walk  to the " + Loader.dirMap[dir]);
			
			return true;
			
			
		} else {
			
			if (debug )System.out.println("\n!!! Woof! I've already been here... I don't want to waste energy! ");
			if (debug )System.out.println("Or perhaps I hit a wall...");
			
			return false;
			
		}
		

		
	// end of canIWalkThere method 
	}
	

	public void walkRecursive() {
		
		
		for (int dir = 0; dir < 4; dir++) {
				
			if ( this.canIWalkThere(dir)) {
				
				// only sleep if you can walk there! 
				try {
					Thread.sleep(290);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
				//System.out.println("If I can walk to the " + Loader.dirMap[dir]  + "... I will spawn there!");
				
				int checkRow = this.row; 
				int checkCol = this.col;
				
				switch ( dir) {
				
				case 0:
					checkCol = this.col + 1;
					break;
					
				case 1:
					checkRow = this.row - 1;
					break;
					
				case 2:
					checkCol = this.col - 1;
					break;	
					
				case 3:
					checkRow = this.row + 1;
					break;	
				}
				
				// add the spot to the memory
				// add this data to the hashset and then actually walk! 
				Pos memory = new Pos (checkRow, checkCol);
				
				this.mem.add(memory);
				

				
				
				// make a new Dog -> Where we want it to spawn
				Dog dupliPup = new Dog(checkRow, checkCol, "DOG", this.mem);
				
				// store the dog Node in the world
				Game.world[checkRow][checkCol] = dupliPup;

	
				// make a new Dog where we previously were
				Dog oldPup = new Dog(this.row, this.col, "DOG", this.mem);
				
				// store the dog Node in the world
				Game.world[this.row][this.col] = oldPup;
				
				// At the end of each successful turn display the world!
				Game.displayWorld();
				
				// EXPERIMENTAL CODE -> COULD EXPLODE
				dupliPup.walkRecursive();
			}
			
			
		// end of the dir for loop 	
		}
		

	
		
		
	// end of the walk method 	
	}
	
	
	
	public void walk(int dir) {
		
		int checkRow = this.row;
		int checkCol = this.col;
		
		// convert the direction into a checkable row and column
		
		switch ( dir) {
		
		case 0:
			System.out.println("The Pup wants to walk to the EAST.");
			checkCol = this.col + 1;
			break;
			
		case 1:
			System.out.println("The Pup wants to walk to the NORTH.");
			checkRow = this.row - 1;
			break;
			
		case 2:
			System.out.println("The Pup wants to walk to the WEST.");
			checkCol = this.col - 1;
			break;	
			
		case 3:
			System.out.println("The Pup wants to walk to the SOUTH.");
			checkRow = this.row + 1;
			break;	
			
		default:
			System.out.println("ERROR!!!!!!");
			break;
		}
		
		
		if ( checkRow < 0 || checkRow >= Game.world.length || checkCol < 0 || checkCol >= Game.world[0].length ) {
			
			System.out.println("The Pup is at the edge of the world and barks at the moon! ** WOOF **");
			
			this.stuckCur++;
			if ( this.stuckCur >= this.stuckMax)this.stuck = true;
			
			return;
		}
		
		// now we get to grab whats on the ground
		
		System.out.println("\n CheckRow -> " + checkRow + " :: CheckCol -> " + checkCol);
		
		Node ground = Game.world[checkRow][checkCol];
		
		int c = ground.contains;
		
		System.out.println("The Doggy sees " + Loader.nameMap.get(c) +  " to the " + Loader.dirMap[dir]);

			
		
		// first verify that we haven't already been here...
		// ... and it is not a wall
		if ( this.verifyNotInMem(dir) && c != 1) {
			
			System.out.println("The Doggy walks  to the " + Loader.dirMap[dir]);
			
			this.stuckCur = 0;
			
			if ( c == 2) {
				System.out.println("\n$$$$ WOOF! Yum I got a food! :D $$$$$\n");
				this.eaten++;
				
				
			}
			
			// add this data to the hashset and then actually walk! 
			Pos memory = new Pos (ground.row, ground.col);
			
			this.mem.add(memory);

			// make your dog moved to another spot
			Game.world[checkRow][checkCol] = this;
			
			this.displayMemory();
			
			Node g = new Node(this.row, this.col, "GROUND");
			
			Game.world[this.row][this.col] = g;
			
			// use the checkRow to make your know where it is 
			// Actually change where your dog thinks it is
			this.row = checkRow;
			this.col = checkCol;
			return;
			
			
		} else {
			
			System.out.println("\n!!! Woof! I've already been here... I don't want to waste energy! ");
			System.out.println("Or perhaps I hit a wall...");
			
			this.stuckCur++;
			
			if ( this.stuckCur >= this.stuckMax)this.stuck = true;
			
			
		}
		
			
	// end of the walk method 	
	}
	
	public void duplicateWorld(Node[][] world) {
		
		for (int row = 0; row < Game.world.length; row++) {
			for (int col = 0; col < Game.world[0].length; col++) {
				
				String name = world[row][col].name;
				
				Node tempNode = new Node(row, col, name);
				
				this.memWorld[row][col] = tempNode;
				
			}
		}
	
	// end of the duplicateWorld method
	}
	

// end of the Dog class 
}
