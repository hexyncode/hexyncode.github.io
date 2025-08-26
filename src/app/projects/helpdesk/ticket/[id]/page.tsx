import { TicketDetailView } from "../../components/TicketDetailView";
import { mockTickets } from "../../lib/data";

export default async function TicketDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: ticketId } = await params;

  const ticket = mockTickets.find((t) => t.id === ticketId);
  if (!ticket) {
    return (
      <main className="flex-1 flex items-center justify-center flex-col text-white">
        <p>Ticket not found.</p>
      </main>
    );
  }

  return <TicketDetailView ticket={ticket} />;
}

export async function generateStaticParams() {
  return [
    { id: "TKT-001" },
    { id: "TKT-002" },
    { id: "TKT-003" },
    { id: "TKT-004" },
    { id: "TKT-005" },
    { id: "TKT-006" },
    { id: "TKT-007" },
    { id: "TKT-008" },
  ];
}
