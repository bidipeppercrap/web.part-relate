import { Handlers, PageProps } from "$fresh/server.ts";
import { Vehicle } from "../../interfaces/vehicle.ts";

interface Data {
    query: string;
    vehicles: Vehicle[];
}

export const handler: Handlers<Data> = {
    async GET(req, ctx) {
        const url: URL = new URL(req.url);
        const query: string = url.searchParams.get("keyword") || "";
        const resp: Response = await fetch(`http://localhost:3000/vehicles?keyword=${query}`);

        const vehicles: Vehicle[] = await resp.json();
        return ctx.render({ query, vehicles });
    }
}

export default function Vehicles({ data }: PageProps<Data>) {
    const { query, vehicles } = data;

    return (
        <>
            <form className="form">
                <input name="keyword" value={query} type="text" className="input" />
                <button className="button" type="submit">🔍</button>
            </form>
            <div className="list">
                {vehicles.map(vehicle => <div className="list-item">{vehicle.name}</div>)}
            </div>
        </>
    )
}