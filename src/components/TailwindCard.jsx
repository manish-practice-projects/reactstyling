import '../theme.css'

export default function TailwindCard({ name, role, active, dark }) {
  return (
    <div
      className={` w-64 p-5 rounded-xl shadow-lg m-3 text-center 
      ${dark ? "bg-gray-800 text-white" : "bg-white text-black"}`}
    >
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-sm">{role}</p>
      <p className={`${active ? "text-green-500" : "text-red-500"} font-semibold`}>
        {active ? "Active" : "Inactive"}
      </p>
    </div>
  );
}
