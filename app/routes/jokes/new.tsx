export default function NewJokeRoute() {
  return (
    <div>
      <p>Add your own hilarious joke</p>
      <form method="post">
        <div>
          <label>
            Name <input name="name" type="text" placeholder="Name" />
          </label>
        </div>
        <div>
          <label>
            Content <textarea name="content" rows={4} placeholder="Content" />
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
