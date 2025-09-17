export default function InternalStyleCard({ name, role, active }) {
  return (
    <>
      <style>
        {`
          .internal-card {
            width: 250px;
            padding: 20px;
            border-radius: 12px;
            background-color: #f9f9f9;
            margin: 10px auto;
            text-align: center;
            box-shadow: 0 2px 6px rgba(0,0,0,0.15);
          }
          .active { color: green; }
          .inactive { color: red; }
        `}
      </style>

      <div className="internal-card">
        <h2>{name}</h2>
        <p>{role}</p>
        <p className={active ? "active" : "inactive"}>
          {active ? "Active" : "Inactive"}
        </p>
      </div>
    </>
  );
}
