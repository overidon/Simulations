/*
	PROJECT: Basketball
	FILE   : Resources.java
	DATE   : 6/8/2020
	PURPOSE: Take .png images from the resources package and make them usable!
		
*/

package main;

import java.awt.image.BufferedImage;
import java.io.IOException;
import javax.imageio.ImageIO;

public class Resources {
	
	public static BufferedImage loadImage(String filename){
		
		// Initially set the img to null
		BufferedImage img = null;
		
		try {
			// a stream of data will be turned into the image 
			img = ImageIO.read(Resources.class.getResourceAsStream("/resources/"  + filename));
		
		} catch (IOException e) {
			System.out.println("Error while reading; " + filename);
			e.printStackTrace();
		}
		
		// return an image so we can put it in a class.. 
		return img;
		
	// end of the loadImage method 
	}
	
// end of Resources class 
}
