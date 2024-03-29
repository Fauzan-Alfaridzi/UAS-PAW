import { Component } from "react"
import { Col, ListGroup } from "react-bootstrap"
import axios from 'axios'
import { API_URL } from "../utils/constant"


export default class ListCategori extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        axios.get(API_URL + "categories")
            .then(res => {
                const categories = res.data;
                this.setState({ categories });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const { categories } = this.state
        const { changeCategory, categoriYangDipilih } = this.props
        return (
            <Col md={2} mt="2">
                <h4><strong>Daftar Kategori</strong></h4>
                <hr />
                <ListGroup>
                    {categories && categories.map((category) => (
                        <ListGroup.Item
                            onClick={() => changeCategory(category.nama)} 
                            className={ categoriYangDipilih === category.nama && "category-aktif" }
                            style={{cursor: 'pointer' }}
                        >
                            <h5>
                            {category.nama}
                            </h5>
                        </ListGroup.Item>
                    ))}

                </ListGroup>
            </Col>
        )
    }
}