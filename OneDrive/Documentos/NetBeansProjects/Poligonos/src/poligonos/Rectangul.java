
package poligonos;




public  class Rectangul extends Poligono {
    private double Lado1;
    private  double Lado2;

    public Rectangul(double Lado1,double Lado2){
        this.Lado1=Lado1;
        this.Lado2=Lado2;
    }

    public double getLado1() {
        return Lado1;
    }

    public double getLado2() {
        return Lado2;
    }
    
    
    

    @Override
    public String toString() {
        return "Rectangulo" + "Lado1=" + Lado1 + " Lado2=" + Lado2 ;
    }
    @Override
    public double Area(){
        return Lado1*Lado2;
    }
   
}
