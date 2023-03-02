export default function AddProduct() {
  return (
    <section id="add-product">
      <h2>Add a new Product</h2>
      <form>
        <label>
          <span>Title</span>
          <input type="text" />
        </label>
        <label>
          <span>Image URL</span>
          <input type="text" />
        </label>
        <label>
          <span>Related Category</span>
          <select>
            <option>Beef</option>
            <option>Chicken</option>
            <option>Beverages</option>
          </select>
        </label>
        <label>
          <span>Price</span>
          <input type="text" />
          <span className="currency">SEK</span>
        </label>
        <label>
          <span>Description</span>
          <textarea></textarea>
        </label>
        <button className="primary-btn">Add Product</button>
      </form>
    </section>
  );
}
