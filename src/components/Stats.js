export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Începe să adaugi obiecte în lista de călatorie🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter(function (item) {
    return item.packed;
  }).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage !== 100
          ? `Ai ${numItems} obiecte pe lista ta, si deja ai impachetat
        (${percentage}%)`
          : "Ai luat totul! Ești gata de plecare ✈️"}
      </em>
    </footer>
  );
}
