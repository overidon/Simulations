package main;

import java.awt.Color;
import java.awt.image.BufferedImage;

public class Loader {
	
	public static Color trackGreen = new Color(12, 150, 12);
	
	public static BufferedImage TD_CAR_0_0 = Resources.loadImage("TD_CAR_0_0.png"); 
	public static BufferedImage TD_CAR_0_1 = Resources.loadImage("TD_CAR_0_1.png"); 
	public static BufferedImage TD_CAR_0_2 = Resources.loadImage("TD_CAR_0_2.png"); 
	public static BufferedImage TD_CAR_0_3 = Resources.loadImage("TD_CAR_0_3.png"); 
	public static BufferedImage TD_CAR_0_4 = Resources.loadImage("TD_CAR_0_4.png"); 
	public static BufferedImage TD_CAR_0_5 = Resources.loadImage("TD_CAR_0_5.png"); 
	public static BufferedImage TD_CAR_0_6 = Resources.loadImage("TD_CAR_0_6.png"); 
	public static BufferedImage TD_CAR_0_7 = Resources.loadImage("TD_CAR_0_7.png"); 
	
	public static BufferedImage car_0_imgs[] = {TD_CAR_0_0,TD_CAR_0_1,TD_CAR_0_2,
			TD_CAR_0_3,TD_CAR_0_4,TD_CAR_0_5,TD_CAR_0_6,TD_CAR_0_7
	
	};
	
	
	public static int trackW = Game.windowWidth / 2;
	
	public static int innerTrackY=  Game.windowHeight / 3  + 48;
	public static int innerTrackR = trackW / 3;
	
	
// end of the loader class 	
}
