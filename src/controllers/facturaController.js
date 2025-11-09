import { Factura, Employee,  } from "../models/index.js";



// GET /factura
export const getFactura = async (req, res, next) => {
  try {
    const factura = await Factura.findAll({ include: [Employee] });
    res.json(factura);
  } catch (err) {
    next(err);
  }
};

// GET /factura/employees/:id

export const getFacturaById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const factura = await Factura.findAll({
        include: [
          {
            model: Employee,
            where: { id },
            // required: false,
          },
        ],
      });
      res.json(factura);
    }
    catch (err) {
      next(err);
    }
  };
  
  // PUT /factura/employees/:id
  export const updateFacturaById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { factura } = req.body;
  
      for (const record of factura) {
        await Factura.upsert({
          employee_id: record.employee_id,
          name: record.name,
          price: record.price,
        });
      }
  
      res.json({ message: "Factura updated successfully." });
    }
    catch (err) {
      next(err);
    }
  };    

  // POST factura


//   export const createFactura = async (req, res) => {
//   try {
//     lastInvoiceNumber++;

//     const nuevaFactura = {
//       invoice_number: lastInvoiceNumber,
//       ...req.body,
//     };

//     // guardas en DB
//     await Factura.create(nuevaFactura);

//     res.json({
//       invoice_number: nuevaFactura.invoice_number,
//       message: "Factura creada correctamente",
//     });
//   } catch (error) {
//     res.status(500).json({ error: "Error creando factura" });
//   }
// };
export const createFactura = async (req, res, next) => {

  try {
    const facturaCreada = await Factura.create({ ...req.body });
    if (!facturaCreada)
      return res
        .status(401)
        .send({ message: "La Factura no pudo ser creada." });
    res.status(200).send({
      message: "Factura creada con exito.",
      facturaCreada,
    });
  } catch (e) {
    next(e);
  }
};