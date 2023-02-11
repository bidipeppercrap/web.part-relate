import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.3/server.ts";
import { Vehicle } from "../../interfaces/vehicle.ts";

interface Data {
    vehicle: Vehicle;
}

export const handler: Handlers<Data> = {
    async GET(_, ctx) {
        const { id } = ctx.params;

        const resp = await fetch(`http://localhost:3000/vehicles/${id}`);

        const vehicle: Vehicle = await resp.json();
        return ctx.render({ vehicle });
    }
}

export default function VehicleDetail({ data }: PageProps<Data>) {
    const { vehicle } = data;

    return (
        <div className="card">
            <p className="text">{vehicle.id}</p>
            <p className="text">{vehicle.name}</p>
        </div>
    )
}