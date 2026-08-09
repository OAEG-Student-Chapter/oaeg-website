import { NextResponse } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

interface InsertPayload {
    member: Record<string, unknown>;
    schoolDetails?: Record<string, unknown>;
    universityDetails?: Record<string, unknown>;
    ieslDetails?: Record<string, unknown>;
    professionalMemberships?: Record<string, unknown>[];
    workDetails?: Record<string, unknown>;
    maritalDetails?: Record<string, unknown>;
    children?: Record<string, unknown>[];
    referrals?: Record<string, unknown>[];
}

const supabaseHeaders = () => ({
    "apikey": SUPABASE_KEY ?? "",
    "Authorization": `Bearer ${SUPABASE_KEY ?? ""}`,
    "Content-Type": "application/json",
});

async function insertRow(table: string, row: Record<string, unknown>): Promise<{ id: number } | null> {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
        method: "POST",
        headers: {
            ...supabaseHeaders(),
            Prefer: "return=representation",
        },
        body: JSON.stringify(row),
    });

    if (!res.ok) {
        throw new Error(`Failed to insert into ${table}: ${res.status} ${await res.text()}`);
    }

    const rows = await res.json();
    return Array.isArray(rows) && rows.length > 0 ? rows[0] : null;
}

async function deleteRow(table: string, id: number): Promise<void> {
    await fetch(`${SUPABASE_URL}/rest/v1/${table}?id=eq.${id}`, {
        method: "DELETE",
        headers: supabaseHeaders(),
    });
}

export async function POST(request: Request) {
    if (!SUPABASE_URL || !SUPABASE_KEY) {
        return NextResponse.json(
            { error: "Supabase credentials are not configured on the server." },
            { status: 500 }
        );
    }

    let payload: InsertPayload;
    try {
        payload = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    let memberId: number | null = null;
    try {
        const member = await insertRow("members", payload.member);
        if (!member) {
            throw new Error("Failed to create member record.");
        }
        memberId = member.id;

        const insertChildren = async (
            table: string,
            rows?: Record<string, unknown>[]
        ) => {
            if (!rows || rows.length === 0) return;
            for (const row of rows) {
                if (row && Object.values(row).some((v) => v !== "" && v !== null && v !== undefined)) {
                    await insertRow(table, { ...row, member_id: memberId });
                }
            }
        };

        if (payload.schoolDetails) await insertRow("school_details", { ...payload.schoolDetails, member_id: memberId });
        if (payload.universityDetails) await insertRow("university_details", { ...payload.universityDetails, member_id: memberId });
        if (payload.ieslDetails) await insertRow("iesl_details", { ...payload.ieslDetails, member_id: memberId });
        await insertChildren("professional_memberships", payload.professionalMemberships);
        if (payload.workDetails) await insertRow("work_details", { ...payload.workDetails, member_id: memberId });
        if (payload.maritalDetails) await insertRow("marital_details", { ...payload.maritalDetails, member_id: memberId });
        await insertChildren("children", payload.children);
        await insertChildren("referrals", payload.referrals);

        return NextResponse.json({ success: true, id: memberId }, { status: 201 });
    } catch (error) {
        if (memberId) {
            await deleteRow("members", memberId).catch(() => undefined);
        }
        console.error("Registration insert failed:", error);
        return NextResponse.json(
            { error: "Registration could not be saved. Please try again." },
            { status: 500 }
        );
    }
}
