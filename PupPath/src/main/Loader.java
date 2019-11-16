package main;

import java.util.HashMap;

public class Loader {
	
	
	public static HashMap<Integer, String> nameMap = new HashMap<Integer, String>();
	public static HashMap<Integer, String> abbrMap = new HashMap<Integer, String>();
	
	
	public static String [] dirMap = {"EAST", "NORTH", "WEST", "SOUTH"};
	
	public static void pupulateNameMap() {
		
		nameMap.put(0, "GROUND" );
		nameMap.put(1, "WALL");
		nameMap.put(2, "FOOD");
		nameMap.put(3, "ENEMY");
		nameMap.put(4, "GROUND");
		nameMap.put(5, "DOG");
		
		
		abbrMap.put(0, " " );
		abbrMap.put(1, "=");
		abbrMap.put(2, "$");
		abbrMap.put(3, "E");
		abbrMap.put(4, " ");
		abbrMap.put(5, "D");
		
		
		
	// end of the 	pupulateNameMap
	}
	
// end of the Loader class 
}
