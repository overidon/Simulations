package main;

import java.util.HashSet;
import java.util.Scanner;

public class Game {
	
	
	public static Node[][] world = new Node[12][16];
	
	// primary pup...
	public static Dog pup;
	
	
	public static void main (String [] args) {
		
		System.out.println(" \n\n **** Welcome to the Pup Path!  ***** \n\n ");
		
		Loader.pupulateNameMap();
		pupulateMaze();
		displayWorld();
		
		
		Dog dupePup = new Dog(pup.row , pup.col, "DupyPup", pup.mem);
		
		// important
		world[pup.row ][pup.col] = dupePup;
		
		dupePup.walkRecursive();
		

	
	// end of the main driver method 	
	}
	
	// fill the maze with dogs
	public static void pupulateMaze() {
		
		
		for (int row = 0; row < world.length; row++) {
			for (int col = 0; col < world[0].length; col++) {
				
				int roll = (int) (Math.random() * 3);
				
				Node node = new Node(row, col, Loader.nameMap.get(roll));	
				world[row][col] = node;
				
			}
		}
		
		
		int testRow = (int) (Math.random() * world.length);
		int testCol = (int) (Math.random() * world[0].length);
		
		pup = new Dog(testRow, testCol, "DOG", new HashSet<Pos>());
		world[testRow][testCol] = pup;
		
		
	}
	
	
	
	
	
	public static int countFood() {
		
		int counter = 0;
		
		for (int row = 0; row < world.length; row++) {
			for (int col = 0; col < world[0].length; col++) {
				
				if (world[row][col].contains == 2) counter ++;
				
			}
		}
		
		System.out.println("This map has a total of: " + counter + " foods for me to find!");
		
		return counter;
		
	// end of the countFood method...
	}
	
	
	public static void displayWorld() {
		
		System.out.println("\n");
		System.out.println("**********       THE WORLD  ********    ");
		System.out.println("\n");
		
		for (int row = 0; row < world.length; row++) {
			for (int col = 0; col < world[0].length; col++) {
				
				System.out.print(world[row][col]);
				
			}
			System.out.println(" ROW: " + row);
		}
		
		
		for (int col = 0; col < world[0].length; col++) {

			System.out.print(" ^ ");
		}
		System.out.println("");
		
		for (int col = 0; col < world[0].length; col++) {
			int c = col % 10;
			System.out.print("[" + c +"]");
		}
		
		System.out.println("");
	}
	
// end of the Game class 
}
