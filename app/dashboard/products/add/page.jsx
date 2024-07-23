// import React from 'react'
"use client";
import { addProduct } from "@/app/lib/actions";
import styles from "@/components/dashboard/products/addProduct/addProducts.module.css";
// import { CLoadingButton } from "@coreui/react-pro";
import { useState } from "react";
const AddProductPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);

    try {
      await addProduct(formData);
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="add-product-section">
      <div className={styles.container}>
        {/* <form action={addProduct} className={styles.form}> */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" placeholder="title" name="title" required />
          <select name="category" id="category">
            <option value="general">Choose a category</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <input type="number" placeholder="price" name="price" />
          <input type="number" placeholder="stock" name="stock" />
          <input type="text" placeholder="color" name="color" />
          <input type="text" placeholder="size" name="size" />
          <textarea
            name="desc"
            id="desc"
            cols={30}
            rows={16}
            placeholder="Description"
          ></textarea>
          {/* <button type="submit">Submit</button> */}
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Submit"}
          </button>
          {/* <CLoadingButton color="info" spinnerType="grow" timeout={2000}>
            closing button
          </CLoadingButton> */}
        </form>
      </div>
    </section>
  );
};

export default AddProductPage;
