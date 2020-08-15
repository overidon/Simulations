/*
	PROJECT: TopDownCar
	FILE   : Game.java
	DATE   : 6/13/2020
		
*/


package main;

import java.awt.BorderLayout;
import java.io.IOException;

import javax.sound.sampled.LineUnavailableException;
import javax.sound.sampled.UnsupportedAudioFileException;
import javax.swing.JFrame;

public class Game extends JFrame {

	private static final long serialVersionUID = 6816433450295004736L;

	// 1. PUBLIC STATIC AREA.. 
	static JFrame frame;
	
	// this helps us paint
	public static DrawWindow drawPanel;
	
	public static int windowWidth = 1200;
	static int windowHeight = 896;	
	
	// your car! 
	public static Car player = new Car(480, 150);

	// main driver method... 
	public static void main(String[] args) throws UnsupportedAudioFileException, IOException, LineUnavailableException {
		System.out.println("***** Welcome to TopDownCar ****");
		
		// IMPORTANT -> Initialize the game BEFORE creating the 
		//              GUI Instance... 
		init();
		
		// IMPORTANT -> Create the Game() instance with the prepareGui method
		new Game().prepareGui();

	// end of the main driver method 
	}
	
	// Initialization method... build players and objects here
	public static void init() {
		
		// TODO
		System.out.println("... Initializing game.");
		
		
	// end of the init...	
	}

	private void prepareGui() throws UnsupportedAudioFileException, IOException, LineUnavailableException  {
		
		//  Auto-generated method stub
		// 1
		frame = new JFrame("**** Top Down Car****");
		
		// 2 
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		// 3
		drawPanel = new DrawWindow();
		
		// 3.B. integrate input system :D
		new Input(drawPanel);
		
		frame.getContentPane().add(BorderLayout.CENTER, drawPanel);
		
		frame.setResizable(false);
		drawPanel.setFocusable(true);
		drawPanel.requestFocusInWindow();

		frame.setSize(windowWidth, windowHeight);
		frame.setLocationByPlatform(true);
		frame.setVisible(true);
		
		// TODO 
		// Connect the input to the Game -> Keyboard - Mouse etc
		//Input.prepareInput();
	
		update();
		
	// end of the prepareGui method 
	}
	
	
	public static void update() throws IOException {
		//IMPORTANT !!!
		while (true) {
			
			
			player.update();

			// IMPORTANT sleep method.. 
			try 
			{
			    // Sleep makes it so the game doesn't use too much CPU power 
				Thread.sleep(6);
			}
	        catch (Exception e)
	        {
	        	e.printStackTrace();
	        }

			//After sleeping - Repaint the image
			frame.repaint();
		}
	// end of the update method 
	}
	
	
// end of the Game class 
}
