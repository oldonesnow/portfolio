export default function Tag({ label }) {
  return (
    <span className="tag-pop inline-block font-mono text-xs px-2 py-1 rounded bg-surface text-muted border border-gray-200">
      {label}
    </span>
  );
}
