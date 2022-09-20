import { Component } from "react";


export default class TableRow extends Component {
    render(){
        let product = this.props.product
        return (
            <tr>
            <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.discountPercentage}</td>
                <td>{product.rating}</td>
                <td>{product.stock}</td>
            </tr>
        )
    }
}