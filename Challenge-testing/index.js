class carritoCompra{
    constructor(){
        this.items = [];
    }

    agregarProducto(producto){
        this.items.push(producto);
    }

    calcularTotal(){
        let total = 0;
        for (let producto of this.items){
            total += producto.price * producto.quantity;
        }
        return total;
    }

    aplicarDescuento(porcentaje) {
        const total = this.calcularTotal();
        const descuento = total * (porcentaje / 100);
        this.totalCompra = total - descuento;
        return this.totalCompra;    
    }

}

module.exports = carritoCompra;
