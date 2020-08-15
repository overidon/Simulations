package main;

import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

public class Input implements KeyListener {
	
	private DrawWindow  dw; 
	
	public Input (DrawWindow dw) {
		this.dw = dw;
		

		dw.addKeyListener(this);
	}

	@Override
	public void keyPressed(KeyEvent e) {
		// TODO Auto-generated method stub
		//System.out.println(e);
		
		if ( e.getKeyCode() == 87) {
			Game.player.accelerate();
		}
		
		
		if ( e.getKeyChar() == 'A' || e.getKeyChar() == 'a') {
			Game.player.handleAngle(5);
			
		}
			
		
		if ( e.getKeyChar() == 'D' || e.getKeyChar() == 'd') {
			Game.player.handleAngle(-5);
		}
		
		
		if ( e.getKeyChar() == 'S' || e.getKeyChar() == 's') {
			Game.player.decelerate();
		}
		
		
	// end of the keyPressed method 	
	}

	@Override
	public void keyReleased(KeyEvent e) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void keyTyped(KeyEvent e) {
		// TODO Auto-generated method stub
		
	}
}
