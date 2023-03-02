export default function AddCategory() {
  return (
    <section className="add-category">
      <h2>Add a new Category</h2>
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
          <span>Description</span>
          <textarea></textarea>
        </label>
        <button className="primary-btn">Add Category</button>
      </form>
    </section>
  );
}
