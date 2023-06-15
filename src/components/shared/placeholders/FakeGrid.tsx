import Card from "./Card";

function FakeGrid({ items = 3 }: { items?: number }) {
  const elements = Array(items).fill((i: number) => i + 1);

  return (
    <div className="grid">
      {elements.map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
}

export default FakeGrid;
