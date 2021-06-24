const controllers = {};

controllers.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM contactos", (err, rows) => {
      if (err) throw err;
      res.render("contactos", {
        data: rows,
      });
    });
  });
};

controllers.save = (req, res) => {
  const data = req.body;
 //console.log(file)
    //file.mv('public/images/upload_images/'+file.name, function(err) {
    req.getConnection((err, conn) => {
      conn.query("INSERT INTO contactos SET ?  ", [data], (err, rows) => {
        console.log(rows);
        res.redirect("/");
      });
    //});
  });
   
  
};
controllers.windowsave = (req, res) => {
  res.render("crearcontacto");
};

controllers.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      "SELECT * FROM contactos where idcontacto = ?",
      [id],
      (err, rows) => {
        res.render("actualizarcontacto", {
          data: rows[0],
        });
      }
    );
  });
};

controllers.update = (req, res) => {
  const { id } = req.params;
  const newContacto = req.body;
  req.getConnection((err, conn) => {
    conn.query(
      "UPDATE contactos SET ? WHERE idcontacto = ?",
      [newContacto, id],
      (err, rows) => {
        res.redirect("/");
      }
    );
  });
};
controllers.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      "DELETE FROM contactos WHERE idcontacto = ?",
      [id],
      (err, rows) => {
        res.redirect("/");
      }
    );
  });
};
module.exports = controllers;
