import { Card, Status } from "../styled";

export default function StyledComponentCard({ name, role, active, dark }) {
  return (
    <Card dark={dark}>
      <h2>{name}</h2>
      <p>{role}</p>
      <Status active={active}>{active ? "Active" : "Inactive"}</Status>
    </Card>
  );
}
