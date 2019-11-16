package main;

import java.awt.image.BufferedImage;

public class Node {
	
	int x, y, row, col, w, h;
	
	int contains = 0;
	
	/*
	 *  CONTAINS -> 0 -> Empty or Ground
	 *  CONTAINS -> 1 -> Wall
	 *  CONTAINS -> 2 -> FOOD
	 *  CONTAINS -> 3 -> Enemies Competitive Pups
	 *  CONTAINS -> 4 -> PLACEHOLDER
	 *  CONTAINS -> 5 -> HERO DOG
	 *  
	 */
	
	BufferedImage img = null;
	
	String name;
	
	String abbr;
	
	
	public Node(int row, int col, String name) {
		
		this.row = row;
		this.col = col;
				
		this.x = 32 * this.col;
		this.y = 32 * this.row;
		
		this.w = 32; 
		this.h = 32; 
		
		this.name = name;
		
		switch ( this.name ) {
		
		case "WALL":
			this.contains = 1;
			break;
		case "FOOD":
			this.contains = 2;
			break;
		case "ENEMY":
			this.contains = 3;
			break;
		case "DOG":
			this.contains = 5;
			break;
			
		default:
			this.contains = 0;
			break;
			
		// end of the switch for names
		}
		
		this.abbr = Loader.abbrMap.get(this.contains);
		
		
		
	// end of the Node constructor
	}
	
	
	@Override
	public String toString() {
		return "[" + this.abbr + "]";
	}
	
	
	
	
// end of the Node class 
}
