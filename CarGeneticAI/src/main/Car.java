package main;

import java.awt.Color;
import java.awt.Graphics;
import java.awt.image.BufferedImage;

public class Car {
	
	double x, y, vx, vy;
	
	int w, h; 
	
	BufferedImage img;
	
	double angle = 0;
	
	double speed = 0.0;  // km per hour 
	
	double top_speed = 322.0; //322 km per hour 
	
	double mass     = 1496.8; // Nascar Mass kilograms
	double momentum =   0.0; // momentum = mass times velocity 
	
	double max_view = 1.60934; // km 
	
	double track_width = 1.60934;
	
	int max_view_dist = (int) ((this.track_width / this.max_view) * Game.windowWidth);
	
	int mv_x = -1;
	int mv_y = -1;
	
	// 1.6KM -> Game.windowWidth
	
	public Car(int x, int y) {
		
		/*    3 2 1
		 *     \|/
		 *    4-C-0
		 *     /|\
		 *    5 6 7
		 */
		
		this.x = x;
		this.y = y; 
		
		this.vx = 0;
		this.vy = 0;
		this.w  = 32;
		this.h  = 32;
		
		this.img = Loader.TD_CAR_0_0;
		
	}
	
	void update() {
		
		this.x += this.vx; 
		this.y += this.vy; 

	}
	
	void handleAngle( int delta) {
		
		this.angle += delta; 
		
		this.angle %= 360;
		
		if ( this.angle < 0) {
			
			this.angle = 360 + this.angle; 
		}
	
		
		
		this.handleVel();
		this.handleImage();
		
		
		double rad = this.degToRad();
		
		
		// TODO -> SOH CAH TOA
		//this.mv_x = Math.cos(a)
		
		
		
	}
	
	
	void decelerate() {
		
		this.speed *= 0.83;
		this.handleVel();
	}
	
	void handleImage() {
		
		/*
		 * 
		 *  0 is ->    0 to 22.5 and 337.5 -> 360
		 *  1          45 to 45 and 315 -> 360
		 */
		
		int i = 0;
		
		if ( this.angle > 337.5 && this.angle <= 22.5) {
			i= 0; 
		}

		else if ( this.angle > 22.5 && this.angle <= 67.5) {
			i = 1;
		}
		
		else if ( this.angle > 67.5 && this.angle <= 112.5) {
			i = 2;
		}
		else if ( this.angle > 112.5 && this.angle <= 157.5) {
			i = 3;
		}
		
		else if ( this.angle > 157.5 && this.angle <= 202.5) {
			i = 4;
		}
		
		else if ( this.angle > 202.5 && this.angle <= 247.5) {
			i = 5;
		}
		
		else if ( this.angle > 247.5 && this.angle <= 292.5) {
			i = 6;
		}
		else if ( this.angle > 292.5 && this.angle <= 337.5) {
			i = 7;
		}
	
		
		this.img = Loader.car_0_imgs[i];	
		
		
	}
	
	
	
	void accelerate() {
		
		
		// you hit top speed...
		if ( speed >= top_speed) {
			speed = top_speed;
			return;
		}
		
		
		// you are not at top speed 
		
		System.out.println("Accelerate!");
		this.momentum += 1.2;
		this.speed =  this.momentum / this.mass  ;
		this.handleVel();
	// end of the accelerate method 
	}
	
	double degToRad() {
		return (this.angle * Math.PI) / 180.00;
	}
	
	
	void handleVel() {
		
		if (this.angle == 0) {
			this.vx = this.speed; 
			this.vy = 0; 
			return;
		}
		
		this.vy = -1 * Math.sin(degToRad()) * this.speed; 
		this.vx = Math.cos(degToRad()) * this.speed; 
	
	}
	
	// draw method for the Car 
	public void draw(Graphics g) {
		g.drawImage(this.img, (int)Math.round (this.x), (int)Math.round(this.y), this.w, this.h, null);
		
		g.setColor(Color.BLACK);
		g.drawString("speed: " +    this.speed,  (int) this.x, (int)this.y - 112);
		g.drawString("angle: " +    this.angle,  (int) this.x, (int)this.y - 100);
		g.drawString("   vx: " +       this.vx,  (int) this.x, (int)this.y -  88);
		g.drawString("   vy: " +       this.vy,  (int) this.x, (int)this.y -  76);
		
		
	// end of the draw method 
	}
	
	
// end of the Car class 
}
