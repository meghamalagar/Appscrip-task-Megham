"use client";  // Add this at the top of the file

import React, { useState } from "react";

const ProductList = ({ products }) => {
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Recommended");

  const handleSortClick = () => {
    setSortOpen(!sortOpen);
  };

  const handleSortSelect = (sortOption) => {
    setSelectedSort(sortOption);
    setSortOpen(false);
    // Here you can add logic to actually sort the products based on selected option
  };

  return (
    <div className="product-page">
      <div className="filter-sidebar">
        <h4>3425 Items</h4>
        <button className="toggle-filter">HIDE FILTER</button>
        <div className="filter-section">
          <h5>Customizable</h5>
          <input type="checkbox" />
        </div>
        <div className="filter-section">
          <h5>Ideal For</h5>
          <select>
            <option>All</option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>
        </div>
        <div className="filter-section">
          <h5>Occasion</h5>
          <select>
            <option>All</option>
            <option>Casual</option>
            <option>Formal</option>
            <option>Sport</option>
          </select>
        </div>
        <div className="filter-section">
          <h5>Work</h5>
          <select>
            <option>All</option>
            <option>Office</option>
            <option>Home</option>
            <option>Outdoor</option>
          </select>
        </div>
      </div>
      <div className="product-content">
        <div className="product-header">
          <h2>Discover Our Products</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
          <div className="product-options">
            <span>3425 Items</span>
            <div className="sort-options" onClick={handleSortClick}>
              <span>{selectedSort}</span>
              <i className="fas fa-chevron-down"></i>
              {sortOpen && (
                <div className="sort-dropdown">
                  <div
                    className={`sort-item ${selectedSort === "Recommended" ? "selected" : ""}`}
                    onClick={() => handleSortSelect("Recommended")}
                  >
                    Recommended
                  </div>
                  <div
                    className={`sort-item ${selectedSort === "Newest First" ? "selected" : ""}`}
                    onClick={() => handleSortSelect("Newest First")}
                  >
                    Newest First
                  </div>
                  <div
                    className={`sort-item ${selectedSort === "Popular" ? "selected" : ""}`}
                    onClick={() => handleSortSelect("Popular")}
                  >
                    Popular
                  </div>
                  <div
                    className={`sort-item ${selectedSort === "Price: High to Low" ? "selected" : ""}`}
                    onClick={() => handleSortSelect("Price: High to Low")}
                  >
                    Price: High to Low
                  </div>
                  <div
                    className={`sort-item ${selectedSort === "Price: Low to High" ? "selected" : ""}`}
                    onClick={() => handleSortSelect("Price: Low to High")}
                  >
                    Price: Low to High
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-label">{product.label}</div>
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.price} USD</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
