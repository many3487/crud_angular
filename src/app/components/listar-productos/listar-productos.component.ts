import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  listProductos: Producto[]=[];

  constructor(private _productoService: ProductoService ,
    private toastr: ToastrService) {}
  
  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this._productoService.getProductos().subscribe((data: any) => {
      console.log(data);
      this.listProductos =data;
    }, (error: any) => {
      console.log(error);
    });
  }
  eliminarProducto(id:any){
    this._productoService.eliminarProducto(id).subscribe(data =>{
      this.toastr.error("Elproducto fue eliminado con exito" ,"Producto eliminado");
      this.obtenerProductos();
    },error =>{
      console.log(error);
      
    })
  }
}