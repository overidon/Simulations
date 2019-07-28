package main;

import java.util.HashSet;
import java.util.Vector;

public class Perm_V3A {

	public static void main(String[] args) {

		
		HashSet<Integer> set = new HashSet<Integer>();
		
		set.add(3);
		set.add(6);
		set.add(7);
		
		Vector<Integer> v = new Vector<Integer>();
		
		for ( int a : set) v.add(a);
		
		System.out.println(v);
		
		
		int s = v.size();
		
		
		Vector<Integer> mult0 = new Vector<Integer>();
		
		mult0.add(v.get(0));
		mult0.add(v.get(0));
		mult0.add(v.get(0));
		
		Vector<Integer> mult1 = new Vector<Integer>();
		
		mult1.add(v.get(0));
		mult1.add(v.get(0));
		
		// begin the mult0 series
		for (int l = 0; l < s; l++) {
			for (int m = 0; m < s; m++) {
				for (int r = 0; r < s; r++) {
					
					
					for (int j = 0; j < s; j++) {
						for (int k = 0; k < s; k++){
						
							mult0.set(0, v.get(l));
							mult0.set(1, v.get(m));
							mult0.set(2, v.get(r));
							
							mult1.set(0, v.get(j));
							mult1.set(1, v.get(k));
							
							try {
								Thread.sleep(200);
							} catch (InterruptedException e) {
								// TODO Auto-generated catch block
								e.printStackTrace();
							}
							System.out.println("Multiplicand 0 -> " + mult0);
							System.out.println("Multiplicand 1  ->   " + mult1 + " \n");
						
						// end of the mult1 -> index loop series...	
						}
					}
					

				// end of the mutlt0 INDEX -> loop series 	
				}
			}
		}
		
		
	// end of main driver method...
	}

// end of Perm_V3A class
}
