const carritoCompra = require("../index");

//constructor(): Inicializa el carrito como un array vacío.
//agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
//calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
//AplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.


describe("La clase carritoCompras", () =>{

    let carrito

    beforeEach(() => {
        carrito = new carritoCompra ();
    });

    it("Debe iniciar carritoCompra como un array Vacio", () => {
        expect(carrito.items).toEqual([]);
    });

    it("Debe Recibe un objeto representando un producto y lo agrega al carrito",() => {
        const producto = {name:"Producto Naranja", price: 1500, quantity: 2};
        carrito.agregarProducto(producto);
        expect(carrito.items.length).toBe(1);  //verifico que haya 1 producto
        expect(carrito.items[0]).toEqual(producto); //verifico que se agregue el producto correctamente al carrito
    });

    it("Debe Calcula el total de la compra sumando los precios de todos los productos en el carrito", () => {
        carrito.agregarProducto({name:"Producto Naranja", price: 1500, quantity: 2}); 
        carrito.agregarProducto({name:"Producto Pera", price: 800, quantity: 3}); 
        carrito.agregarProducto({name:"Producto Fresa", price: 5000, quantity: 2});
        
        const total = carrito.calcularTotal();
        expect(total).toEqual(15400);
    });

    it("Debe Aplica un descuento al total de la compra según el porcentaje especificado", () => {
        carrito.agregarProducto({name:"Producto Naranja", price: 1500, quantity: 2}); 
        carrito.agregarProducto({name:"Producto Pera", price: 800, quantity: 3}); 
        carrito.agregarProducto({name:"Producto Fresa", price: 5000, quantity: 2});
        const totalCompra = carrito.aplicarDescuento(15);
        expect(totalCompra).toBe(13090);
        expect(carrito.totalCompra).toBe(13090);
    });

});
