export default function TrustStats({
  stats = [
    { value: "24/7", label: "Emergency Care" },
    { value: "Experienced", label: "Medical Team" },
    { value: "Trusted", label: "Patient Support" },
  ],
}) {
  return (
    <div className="flex gap-10 text-white/90">
      {stats.map((stat, index) => (
        <div key={index}>
          <div className="text-2xl font-bold">{stat.value}</div>
          <div className="text-xs uppercase tracking-widest text-gray-300">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
