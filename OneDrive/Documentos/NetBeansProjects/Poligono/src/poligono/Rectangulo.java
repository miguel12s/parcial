/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package poligono;

/**
 *
 * @author Miguel Suarez
 */
public  class Rectangulo extends Poligono {
    private double Lado1;
    private  double Lado2;

    public Rectangulo(double Lado1,double Lado2){
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
