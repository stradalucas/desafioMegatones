import * as jsonfile from "jsonfile";

// No sé desarrollar en C#. Lo hice en TypeScript.
// Instalar dependecias npm install

// Clase sin constructor. Los celulares se agregan con el metodo -setCelular
class Celular {
  id: number;
  marca: string;
  precio: number;
  cuotas: boolean;
  fecha: Date;
}

// Clase con los metodos de la colletion.
class CelularCollection{

  setCelular(celular: Celular): Promise<boolean> {

    const celularExiste = this.getById(celular.id).then((celularEncontrado) => {
      if (celularEncontrado) {
        return false;
        
      }else {
        const agregarCelular = this.getTodosCelulares().then((celulares) => {
          celulares.push(celular);
            return jsonfile.writeFile("./celular/celular.json", celulares)    
        })
          return agregarCelular.then(() => {
                return true;
          });
        }
    });
      return celularExiste;
  }
  getTodosCelulares(): Promise<any[]> {
    return jsonfile.readFile("./celular/celular.json").then((celulares) => {
      return celulares;
    });
  }

  getById(id: number): Promise<any> {
    return this.getTodosCelulares().then((celulares) => {
      const celularById = celulares.find((obtenerUnCelular) => {
        return obtenerUnCelular.id == id;
      });
      return celularById;
    });
  }

  search(options) {
    return this.getTodosCelulares().then((celulares) => {

       if (options.marca) {
         console.log(options.marca);
        return celulares.filter((filtrarPor) => {
            return filtrarPor.marca.includes(options.marca);
        });

      } else if(options.precio) {
        console.log(options.precio);
          return celulares.filter((filtrarPor) => {
            return filtrarPor.precio.toString().includes(options.precio);
        });
      } else if(options.cuotas) {
        console.log(options.cuotas);
          return celulares.filter((filtrarPor) => {
            return filtrarPor.cuotas.toString().includes(options.cuotas);
          });
      } else if(options.fecha){
        console.log(options.fecha);
        return celulares.filter((filtrarPor) => {
          return filtrarPor.fecha.includes(options.fecha);
        });
      }
    });
  }          
}

    
// Test
// Ingresar en la consola "ts-node Celular.ts" o "npm run start".
const objeto = new CelularCollection();

objeto.setCelular({"id": 6, "marca": "LG", "precio": 9000, "cuotas": true, "fecha": new Date()}).then((resultado) => {
  console.log(resultado);
});
// objeto.setCelular({"id": 7, "marca": "Motorola", "precio": 8500, "cuotas": true, "fecha": new Date()}).then((resultado) => {
//   console.log(resultado);
// });

objeto.getTodosCelulares().then((resultado) => {
  console.table(resultado);
});

objeto.search({"marca": "Apple"}).then((resultado) => {
    console.table(resultado);
  })
objeto.search({"precio": 7700}).then((resultado) => {
    console.table(resultado);
  })
objeto.search({"cuotas":"false"}).then((resultado) => {
    console.table(resultado);
  })
objeto.search({"fecha":"2022-04-11"}).then((resultado) => {
    console.table(resultado);
  })

objeto.getById(1).then((resultado) => {
  console.log(resultado);
})