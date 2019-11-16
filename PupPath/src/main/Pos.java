package main;

public class Pos {
	
	
	int row, col;
	
	
	public Pos(int row, int col) {
		this.row = row; 
		this.col = col;
	}
	

	public boolean equals(Pos p) {
		
		if ( this.row == p.row && this.col == p.col) {
			return true;
		}
		
		return false;
		
	}
	
	@Override 
	public String toString() {
		
		return "@MEMROY -> ROW: " + this.row + " ... COL: " + this.col;
	}
	

}
