/*
	PROJECT: Basketball
	FILE   : DrawWindow.java
	DATE   : 6/8/2020
		
*/

package main;

import java.awt.Color;
import java.awt.Graphics;

import javax.swing.JPanel;

public class DrawWindow extends JPanel{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	// this needs to be paintComponent.. 
	public void paintComponent(Graphics g) {
		
		
		// 1. fill a background
		g.setColor(Loader.trackGreen);
		g.fillRect(0, 0, this.getWidth(), this.getHeight());
		
		// call your track here :D 
		track0(g);
		
		
		
		// 2. Draw  a car!
		Game.player.draw(g);
	
	// end of the paintComponent method 	
	}
	
	public void track0(Graphics g) {
		
		// draw the road 
		g.setColor(Color.gray);
		g.fillRect(0, 348, Game.windowWidth, 200);
		
		// draw the checker board
		this.drawChecker(g, Game.windowWidth - 48, 0, 61, 1 );
		this.drawChecker(g, Game.windowWidth - 33, -40, 64, 1 );
		
	

	// end of draw track0	
	}
	
	
	void drawChecker(Graphics g, int xOffset, int yOffset, int rows, int cols) {
		int S = 14;
		// draw checkerboard 
		for (int r = 0; r < rows; r++) {
			boolean alt = r % 2 == 1; 
			for (int c = 0; c < cols; c++) {
				
				if ( r  % 2 == 0) {
					g.setColor(Color.black);
					g.fillRect(xOffset + (S * c), yOffset + (S * r), S, S);

				} else {
					g.setColor(Color.white);
					g.fillRect(xOffset + (S * c), yOffset + (S * r), S, S);
				}
			}
	
			
		}
	}
		
// end of the DrawWindow class
}
