import React, { Component } from "react";
import "./SideBar.css";
import service from "../../services/productSevice";
//import Product from "./Product";

class SideBar extends Component {
  state = {
    categories: [],
    subcategories: [],
    products: [this.props.products],
  };

  componentDidMount() {
    service.getAllCategories().then((response) => {
      const categories = response.data;
      this.setState({ categories });
    });

    service.getAllSubCategories().then((response) => {
      const subcategories = response.data;
      const cats = this.state.categories;
      for (const cat of cats) {
        cat.subctg = [];
        for (const subcat of subcategories) {
          if (cat.ctgName === subcat.ctg.ctgName) {
            cat.subctg.push(subcat);
          }
        }
      }
      this.setState({ categories: cats });
    });
  }

  render() {
    const { categories, subcategories } = this.state;
    return (
        <div className="menu-bar">
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <a
                  href={`/product/category/${category.ctgName}`}
                  onClick={this.props.onChange}
                >
                  {category.ctgName}
                </a>
                <div className="sub-menu-1">
                  <ul>
                    {category?.subctg?.map((subcategory) => (
                      <li key={subcategory.id}>
                        <a
                          href={`/product/subcategory/${subcategory.subCtgName}`}
                        >
                          {subcategory.subCtgName}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
    );
  }
}

export default SideBar;
