import React, { Component } from "react";

export class ProductTable extends Component {

  render() {
    return <table className="table table-sm table-striped">
      <thead><tr><th>Nazwa</th><th>Kategoria</th><th>Cena</th></tr></thead>
      <tbody>
        {
          this.props.products.map(p =>
            <tr key={ p.name }>
              <td>{ p.name }</td>
              <td>{ p.category }</td>
              <td>{Number(p.price).toFixed(2).replace('.', ',')} zł</td>
            </tr>
          )
        }
      </tbody>
    </table>
  }
}