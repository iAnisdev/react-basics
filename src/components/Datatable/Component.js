import { Component } from "react"
import { products } from './data'

import './Datatable.css'
import TableRow from "./TableRow"

export default class DataTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: '',
            products: products
        }

        this.handleChange = this.handleChange.bind(this)
    }

   async handleChange(e) {
        await this.setState({
            search: e.target.value
        })
        this.filterData()
    }

    filterData = () => {
        let search = this.state.search
        if(search.trim() !== ''){
            let filterProducts = products.filter(product => {
                return product.title.toLowerCase().includes(search.toLowerCase()) ||  product.description.toLowerCase().includes(search.toLowerCase()) ||  product.brand.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase())
            })
            this.setState({
                products: filterProducts
            })
        }else{
            this.setState({
                products
            })
        }
    }

    render() {
        let tableData = this.state.products.map(product => {
            return <TableRow product={product} key={product.id} />
        })
        return (
           <>
            <div className="Component">
                <div className="Heading">
                    <div className="heading-box">
                        <p>Available Products</p>
                    </div>
                    <div className="search-box">
                        <div>
                            <input type="searc" name="search" value={this.state.search} placeholder="Search Product" onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Rating</th>
                            <th>Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData}
                    </tbody>
                </table>
            </div>
           </>
        )
    }

}