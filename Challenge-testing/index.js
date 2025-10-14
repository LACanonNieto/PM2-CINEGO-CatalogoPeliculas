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

///return this.items.reduce((total,producto) => total += producto.price * producto.quantity,0)

    aplicarDescuento(porcentaje) {
        const total = this.calcularTotal();
        const descuento = (total / 100) * porcentaje;
        return total - descuento;
    }

}

module.exports = carritoCompra;
